import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import fs from "node:fs/promises";
import path from "node:path";

// Zod Schema to validate admissions form input
export const AdmissionSubmissionSchema = z.object({
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number (minimum 10 digits)"),
  childName: z.string().min(2, "Child name must be at least 2 characters"),
  childAge: z.string().min(1, "Please select your child's age"),
  tourDate: z.string().min(1, "Please select a preferred date"),
  program: z.string().min(1, "Please select a program of interest"),
  notes: z.string().optional(),
});

export type AdmissionSubmission = z.infer<typeof AdmissionSubmissionSchema> & {
  id: string;
  createdAt: string;
};

// Server-side action to save the admission booking
export const submitAdmission = createServerFn({ method: "POST" })
  .inputValidator(AdmissionSubmissionSchema)
  .handler(async ({ data }) => {
    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "admissions.json");

      // Ensure directory exists
      await fs.mkdir(dataDir, { recursive: true });

      // Read existing records
      let submissions: AdmissionSubmission[] = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        submissions = JSON.parse(fileContent);
        if (!Array.isArray(submissions)) {
          submissions = [];
        }
      } catch (err) {
        // File does not exist yet or is empty, ignore error
      }

      // Prepare new entry
      const newSubmission: AdmissionSubmission = {
        ...data,
        id: Math.random().toString(36).substring(2, 9).toUpperCase(),
        createdAt: new Date().toISOString(),
      };

      // Append and write back
      submissions.push(newSubmission);
      await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf-8");

      return {
        success: true,
        data: newSubmission,
      };
    } catch (error) {
      console.error("Failed to save admission submission on server:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Internal Server Error",
      };
    }
  });
