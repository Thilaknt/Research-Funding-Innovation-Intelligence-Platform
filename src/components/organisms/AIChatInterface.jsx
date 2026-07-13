import React, { useState } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { Button } from '../atoms/Button';
import { cn } from '../../utils/cn';

export function AIChatInterface({ onSimulateSubmit }) {
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hello! I'm your Nova AI Assistant. To help me find the best grants for you, please tell me about your Research Area, Interests, Education, Country, and Budget." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      setMessages([
        ...newMessages, 
        { role: 'ai', content: "I've analyzed your profile against our global database. Based on your inputs, I've generated 3 highly relevant grant recommendations. I've highlighted my reasoning for each match." }
      ]);
      setIsTyping(false);
      onSimulateSubmit();
    }, 1500);
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 glass overflow-hidden">
      
      {/* Chat Header */}
      <div className="flex items-center gap-3 border-b border-slate-800/50 bg-slate-900/80 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
          <Bot size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-white">Nova AI</h3>
          <p className="text-xs text-green-400 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Online
          </p>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={cn("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "flex-row")}>
            <div className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white",
              msg.role === 'user' ? "bg-gradient-to-tr from-sky-400 to-blue-600" : "bg-slate-800 border border-slate-700"
            )}>
              {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
            </div>
            <div className={cn(
              "max-w-[85%] rounded-2xl px-4 py-3 text-sm",
              msg.role === 'user' 
                ? "bg-blue-600 text-white rounded-tr-none" 
                : "bg-slate-800/50 text-slate-200 border border-slate-700 rounded-tl-none"
            )}>
              {msg.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-white">
              <Bot size={14} />
            </div>
            <div className="flex max-w-[85%] items-center gap-1 rounded-2xl rounded-tl-none border border-slate-700 bg-slate-800/50 px-4 py-3">
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: '0ms' }}></span>
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: '150ms' }}></span>
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-slate-800/50 p-4">
        <form onSubmit={handleSubmit} className="relative flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. I research Quantum Materials in the US. Budget is $1M..."
            className="max-h-32 min-h-[50px] w-full resize-none rounded-xl border border-slate-700 bg-slate-900/50 py-3 pl-4 pr-12 text-sm text-slate-200 placeholder:text-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 scrollbar-hide"
            rows="2"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button 
            type="submit"
            variant="primary" 
            size="icon" 
            className="absolute right-2 bottom-2 h-8 w-8 shrink-0 rounded-lg"
            disabled={!input.trim() || isTyping}
          >
            <Send size={14} />
          </Button>
        </form>
        <p className="mt-2 text-center text-[10px] text-slate-500">
          AI can make mistakes. Verify eligibility before applying.
        </p>
      </div>
    </div>
  );
}
