
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, Sparkles, X, User, Bot, Loader2 } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: '¡Hola! Soy tu asistente de Aventura Olancho. ¿En qué puedo ayudarte a planear tu viaje hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Create a new GoogleGenAI instance right before making an API call to ensure it always uses the most up-to-date API key.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Eres un experto guía turístico de la empresa "Aventura Olancho". Tu objetivo es promocionar el turismo en Olancho, Honduras, específicamente en Campamento, Juticalpa, Catacamas, Santa María del Real y Dulce Nombre de Culmí. Responde de forma amable, profesional y entusiasta. Usa emojis relacionados con la naturaleza y aventura. Si te preguntan algo fuera de Olancho, intenta redirigirlos amablemente a las maravillas de este departamento.`,
        },
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || "Lo siento, tuve un problema procesando tu solicitud." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Lo siento, el servicio de guía AI no está disponible en este momento." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="ai-assistant-trigger fixed bottom-6 right-6 bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center gap-2"
      >
        <Sparkles className="w-6 h-6 text-orange-400" />
        <span className="hidden md:inline font-semibold">Guía AI</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-96 md:h-[600px] bg-white z-[60] shadow-2xl rounded-t-2xl md:rounded-2xl flex flex-col overflow-hidden border border-slate-200">
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span className="font-bold">Aventura AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-slate-800 p-1 rounded">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl flex gap-2 ${
                  msg.role === 'user' 
                    ? 'bg-orange-500 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.role === 'bot' && <Bot className="w-5 h-5 flex-shrink-0 mt-1" />}
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                  {msg.role === 'user' && <User className="w-5 h-5 flex-shrink-0 mt-1" />}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-orange-500" />
                  <span className="text-sm text-slate-400 italic">Nuestro guía está pensando...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregunta sobre Olancho..."
              className="flex-1 px-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="p-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
