import '@/app/ui/global.css';
import { Github, Mail } from "lucide-react";

export default function Footer() {
    return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-semibold text-white">
          Mon Portfolio © {new Date().getFullYear()}
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/MaxCuvelier?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=maxime.cuvelier1305@gmail.com&su=Contact%20depuis%20portfolio&body=Bonjour,"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
    )
}