import fs from "fs"

export default async function readFileAsync(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, "utf8")
    return data
  } catch (err) {
    throw err
  }
}
