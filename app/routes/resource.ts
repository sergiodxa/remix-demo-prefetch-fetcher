import { json } from "@remix-run/node";

export async function loader() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return json({ message: "Hello World" });
}
