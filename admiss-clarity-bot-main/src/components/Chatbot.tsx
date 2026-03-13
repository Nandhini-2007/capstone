import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const botResponses: Record<string, string> = {
  admission: "Admissions for Fall 2026 are open from March 15 to June 30. You can apply online through our Application Process section.",
  courses: "We offer programs in Engineering, Business Administration, Computer Science, Medicine, Law, and Liberal Arts. Check the Courses section for details.",
  fees: "Tuition varies by program. Engineering: $12,000/year, Business: $10,500/year, Medicine: $18,000/year. Scholarships are available for eligible students.",
  scholarship: "We offer merit-based and need-based scholarships. Merit scholarships cover up to 50% of tuition for students with a GPA above 3.7.",
  deadline: "Application deadline for Fall 2026 is June 30. Early decision deadline is April 15. Results are announced within 4-6 weeks.",
  documents: "Required documents: transcripts, standardized test scores, personal statement, two recommendation letters, and proof of identity.",
  contact: "You can reach us at admissions@greenfield.edu or call +1 (555) 123-4567. Office hours: Mon-Fri, 9 AM - 5 PM.",
  hostel: "On-campus housing is available for all admitted students. Rooms range from $3,000-$5,000/semester depending on type.",
  placement: "Our placement cell has partnerships with 200+ companies. 95% of graduates are placed within 6 months of graduation.",
  eligibility: "Eligibility varies by program. Generally, 10+2 or equivalent with minimum 50% aggregate is required. Check specific program pages for details.",
  transfer: "Transfer students are welcome. You need official transcripts from your current institution and a minimum GPA of 2.5.",
  international: "International students need TOEFL/IELTS scores, a valid passport, and may apply for student visa assistance through our office.",
};

const suggestedQuestions = [
  "What courses are available?",
  "What is the fee structure?",
  "How do I apply for admission?",
  "What scholarships are available?",
  "What is the application deadline?",
  "What documents are required?",
  "Is hostel facility available?",
  "What are the placement statistics?",
  "Am I eligible to apply?",
  "Can I transfer from another university?",
  "How to apply as an international student?",
  "How can I contact the admissions office?",
];

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(botResponses)) {
    if (lower.includes(key)) return value;
  }
  return "Thank you for your question. For specific inquiries, please contact our admissions office at admissions@greenfield.edu or try asking about admissions, courses, fees, scholarships, deadlines, or required documents.";
};

const getFilteredSuggestions = (input: string): string[] => {
  if (!input.trim()) return suggestedQuestions.slice(0, 5);
  const lower = input.toLowerCase();
  return suggestedQuestions
    .filter((q) => q.toLowerCase().includes(lower))
    .slice(0, 5);
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm the Greenfield University admissions assistant. Ask me about courses, fees, deadlines, scholarships, or the application process.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    const userMsg: Message = { id: Date.now(), text: msg, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setShowSuggestions(false);
    setTimeout(() => {
      const botMsg: Message = { id: Date.now() + 1, text: getResponse(msg), sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  const filteredSuggestions = getFilteredSuggestions(input);

  return (
    <div className="bg-card rounded-xl border flex flex-col h-[480px]">
      <div className="px-5 py-3 border-b">
        <h3 className="text-base font-semibold text-foreground">Admission Assistant</h3>
        <p className="text-xs text-muted-foreground">Ask about admissions, courses, fees & more</p>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
          >
            <div
              className={`max-w-[75%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-chat-user border text-foreground rounded-br-sm"
                  : "bg-chat-bot text-foreground rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Suggestion chips */}
      {messages.length <= 2 && !input && (
        <div className="px-5 pb-2 flex flex-wrap gap-1.5">
          {suggestedQuestions.slice(0, 4).map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              className="text-xs px-3 py-1.5 rounded-full border bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      <div className="px-4 py-3 border-t relative">
        {/* Autocomplete dropdown */}
        {showSuggestions && input.trim() && filteredSuggestions.length > 0 && (
          <div className="absolute bottom-full left-4 right-4 mb-1 bg-card border rounded-lg shadow-lg overflow-hidden z-10">
            {filteredSuggestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your question..."
            className="flex-1 px-4 py-2.5 rounded-lg border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
          />
          <button
            onClick={() => handleSend()}
            className="h-10 w-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            <Send className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
