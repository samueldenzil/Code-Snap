import { useMemo } from "react";
import {
  JetBrains_Mono,
  Inconsolata,
  Fira_Code,
  Victor_Mono,
  Source_Code_Pro,
  IBM_Plex_Mono,
  Roboto_Mono,
  Ubuntu_Mono,
  Courier_Prime,
  Anonymous_Pro,
  Oxygen_Mono,
  Red_Hat_Mono,
} from "next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400"] });
const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400"] });
const firaCode = Fira_Code({ subsets: ["latin"], weight: ["400"] });
const victorMono = Victor_Mono({ subsets: ["latin"], weight: ["400"] });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: ["400"] });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400"] });
const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: ["400"] });
const courierPrime = Courier_Prime({ subsets: ["latin"], weight: ["400"] });
const anonymousPro = Anonymous_Pro({ subsets: ["latin"], weight: ["400"] });
const oxygenMono = Oxygen_Mono({ subsets: ["latin"], weight: ["400"] });
const redHatMono = Red_Hat_Mono({ subsets: ["latin"], weight: ["400"] });

export default function useData() {
  const languages = useMemo(
    () => ({
      bash: "Bash",
      c: "C",
      "c++": "C++",
      csharp: "C#",
      clojure: "Clojure",
      crystal: "Crystal",
      css: "CSS",
      diff: "Diff",
      dockerfile: "Docker",
      elm: "Elm",
      elixir: "Elixir",
      erlang: "Erlang",
      graphql: "GraphQL",
      go: "Go",
      haskell: "Haskell",
      html: "HTML",
      java: "Java",
      javascript: "JavaScript/JSX",
      json: "JSON",
      kotlin: "Kotlin",
      lisp: "Lisp",
      lua: "Lua",
      markdown: "Markdown",
      matlab: "MATLAB/Octave",
      pascal: "Pascal",
      plaintext: "Plaintext",
      powershell: "Powershell",
      objectivec: "Objective C",
      php: "PHP",
      python: "Python",
      ruby: "Ruby",
      rust: "Rust",
      scala: "Scala",
      scss: "SCSS",
      sql: "SQL",
      swift: "Swift",
      toml: "TOML",
      typescript: "TypeScript/TSX",
      xml: "XML",
      yaml: "YAML",
    }),
    []
  );

  const themes = useMemo(
    () => ({
      hyper: {
        background:
          "bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400",
        theme:
          "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css",
      },
      oceanic: {
        background:
          "bg-gradient-to-br from-green-300 via-blue-500 to-purple-600",
        theme:
          "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/material-darker.min.css",
      },
      candy: {
        background:
          "bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400",
        theme:
          "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/chalk.min.css",
      },
      sublime: {
        background:
          "bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500",
        theme:
          "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css",
      },
      horizon: {
        background: "bg-gradient-to-br from-orange-500 to-yellow-300",
        theme:
          "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/monokai-sublime.min.css",
      },
      coral: {
        background: "bg-gradient-to-br from-blue-400 to-emerald-400",
        theme:
          "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/tokyo-night-dark.min.css",
      },
      peach: {
        background: "bg-gradient-to-br from-rose-400 to-orange-300",
        theme:
          "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/zenburn.min.css",
      },
      flamingo: {
        background: "bg-gradient-to-br from-pink-400 to-pink-600",
        theme:
          "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/panda-syntax-dark.min.css",
      },
      gotham: {
        background: "bg-gradient-to-br from-gray-700 via-gray-900 to-black",

        theme:
          "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/black-metal-dark-funeral.min.css",
      },
      ice: {
        background: "bg-gradient-to-br from-rose-100 to-teal-100",
        theme:
          "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/ashes.min.css",
      },
    }),
    []
  );

  const fonts = useMemo(
    () => ({
      jetBrainsMono: {
        name: "JetBrains Mono",
        src: jetBrainsMono,
      },
      inconsolata: {
        name: "Inconsolata",
        src: inconsolata,
      },
      firaCode: {
        name: "Fira Code",
        src: firaCode,
      },
      //   cascadiaCode: {
      //     name: "Cascadia Code",
      //     src: "https://cdn.jsdelivr.net/npm/@fontsource/cascadia-code@4.2.1/index.min.css",
      //   },
      victorMono: {
        name: "Victor Mono",
        src: victorMono,
      },
      sourceCodePro: {
        name: "Source Code Pro",
        src: sourceCodePro,
      },
      ibmPlexMono: {
        name: "IBM Plex Mono",
        src: ibmPlexMono,
      },
      robotoMono: {
        name: "Roboto Mono",
        src: robotoMono,
      },
      ubuntuMono: {
        name: "Ubuntu Mono",
        src: ubuntuMono,
      },
      spaceMono: {
        name: "Space Mono",
        src: "https://fonts.googleapis.com/css2?family=Space+Mono&display=swap",
      },
      courierPrime: {
        name: "Courier Prime",
        src: courierPrime,
      },
      anonymousPro: {
        name: "Anonymous Pro",
        src: anonymousPro,
      },
      oxygenMono: {
        name: "Oxygen Mono",
        src: oxygenMono,
      },
      redHatMono: {
        name: "Red Hat Mono",
        src: redHatMono,
      },
    }),
    []
  );

  const codeSnippits = useMemo(
    () => [
      {
        language: "python",
        code: "def is_prime(n):\n  if n <= 1:\n    return False\n  for i in range(2, int(n ** 0.5) + 1):\n    if n % i == 0:\n      return False\n  return True",
      },
      {
        language: "javascript",
        code: "const fibonacci = (n) => {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n};\nconsole.log(fibonacci(10));",
      },
      {
        language: "java",
        code: "import java.util.stream.IntStream;\n\nclass StreamExample {\n  public static void main(String[] args) {\n    IntStream.rangeClosed(1, 5).forEach(System.out::println);\n  }\n}",
      },
      {
        language: "c",
        code: '#include <stdio.h>\n\nint main() {\n  for (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) {\n      printf("%d\\n", i);\n    }\n  }\n  return 0;\n}',
      },
      {
        language: "ruby",
        code: 'class Animal\n  attr_reader :name\n\n  def initialize(name)\n    @name = name\n  end\n\n  def speak\n    raise NotImplementedError, "Subclasses must implement this method"\n  end\nend',
      },
      {
        language: "swift",
        code: "enum Compass {\n  case north, south, east, west\n}\nlet currentDirection = Compass.east\nprint(currentDirection)",
      },
      {
        language: "csharp",
        code: "using System;\nusing System.Linq;\n\nclass LINQExample {\n  static void Main() {\n    int[] numbers = { 3, 9, 2, 8, 6 };\n    var evenNumbers = numbers.Where(n => n % 2 == 0);\n    foreach (var num in evenNumbers) {\n      Console.WriteLine(num);\n    }\n  }\n}",
      },
      {
        language: "php",
        code: "<?php\n$fruits = ['apple', 'banana', 'cherry'];\n$uppercased = array_map('strtoupper', $fruits);\nprint_r($uppercased);\n?>",
      },
      {
        language: "go",
        code: 'package main\n\nimport (\n  "fmt"\n  "math"\n)\n\nfunc main() {\n  x := 4.0\n  y := math.Sqrt(x)\n  fmt.Printf("Square root of %.2f is %.2f\\n", x, y)\n}',
      },
      {
        language: "rust",
        code: 'fn main() {\n  let mut count = 0;\n  loop {\n    println!("Count: {}", count);\n    count += 1;\n    if count > 5 {\n      break;\n    }\n  }\n}',
      },
    ],
    []
  );

  return useMemo(
    () => ({ languages, themes, fonts, codeSnippits }),
    [languages, themes, fonts, codeSnippits]
  );
}