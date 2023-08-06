import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { getJalaliDate } from "@/utils/galali";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, familyName, state, nationalCode, education } = req.body;
    const newData = `${name},${familyName},${nationalCode},${education},${state},${getJalaliDate()}\n`;
    try {
      const filePath = path.join(process.cwd(), "person.txt");
      fs.appendFileSync(filePath, newData);

      res.status(200).json({ message: "Person added successfully" });
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
