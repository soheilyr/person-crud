import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const filePath = path.join(process.cwd(), "person.txt");
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const lines = fileContent.split("\n");
      const persons = lines
        .filter((line) => line.trim() !== "")
        .map((line) => {
          const [
            name,
            familyName,
            nationalCode,
            education,
            state,
            lastModified,
          ] = line.split(",");
          return {
            name,
            familyName,
            education,
            state,
            nationalCode,
            lastModified,
          };
        });
      res.status(200).json(persons);
    } catch (error) {
      console.error("Error getting persons:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  }
}
