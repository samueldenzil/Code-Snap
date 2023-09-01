import CodeEditor from "@/components/code-editor";

export default function Home() {
  return (
    <main className="dark min-h-screen flex flex-col justify-center bg-neutral-950 text-gray-100">
      <div className="mx-auto">
        <CodeEditor />
      </div>
    </main>
  );
}
