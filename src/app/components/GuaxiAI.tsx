import { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
  isGlitch?: boolean;
}

const morseCode = "-.-- --- ..- / .-. . .- .-.. .-.. -.-- / - .... --- ..- --. .... - / ... --- -- . --- -. . / -.-. --- ..- .-.. -.. / .-. . .- -.-. .... / --- ..- - / - --- / -.-- --- ..- --..-- / .-. .. --. .... - / .-- . -. -.. -.-- ..--.. / .. / -.- -. --- .-- / .. - / .. ... / -.-- --- ..- .-.-.-";

const initialMessage: Message = {
  id: 1,
  sender: "ai",
  text: "Hello! I'm Guaxi, your AI-powered support companion. 🦝 I'm here 24/7 to help you navigate social challenges and build confidence. How can I assist you today?",
  timestamp: new Date(),
};

function generateAIResponse(userInput: string): string {
  const input = userInput.toLowerCase();

  // Greetings
  if (input.match(/\b(hi|hello|hey|good morning|good afternoon|good evening)\b/)) {
    return "Hello! I'm so glad you're here. I'm Guaxi, and I'm here to support you. What's been challenging for you lately?";
  }

  // Anxiety/Panic/Fear
  if (input.match(/\b(anxious|anxiety|nervous|scared|worried|panic|fear|overwhelmed)\b/)) {
    return "I understand you're feeling anxious. Let me share a powerful technique: Box Breathing. Breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4. Repeat this 3-4 times. This activates your parasympathetic nervous system and calms your body. Would you like more anxiety management strategies?";
  }

  // Meeting/Presentation/Work
  if (input.match(/\b(meeting|presentation|work|job|office|interview|coworker|boss|colleague)\b/)) {
    return "Professional settings can be particularly stressful. Here's what I recommend: Before your meeting, write down 2-3 points you want to contribute. Having a plan reduces the anxiety of being put on the spot. Also, remember the 'spotlight effect' - you feel like everyone's watching you, but research shows people are mostly focused on themselves. You've got this!";
  }

  // Conversation/Talking
  if (input.match(/\b(talk|talking|conversation|speak|speaking|say|communicate)\b/)) {
    return "Conversations are like muscles - they get stronger with practice. Start with low-pressure situations: ordering coffee, asking for directions, commenting on the weather. Build up gradually. Pro tip: People appreciate genuine listeners more than brilliant talkers. Ask follow-up questions and show real interest. What kind of conversations are hardest for you?";
  }

  // Friends/Social situations
  if (input.match(/\b(friend|friends|social|party|gathering|event|people|lonely|alone)\b/)) {
    return "Social situations can feel overwhelming, I know. Here's a strategy: arrive slightly early to events. It's much easier to greet people one-on-one as they arrive than to walk into a room full of conversations. Also, it's completely okay to take breaks - step outside for fresh air when you need to recharge. Quality connections matter more than quantity.";
  }

  // Eye contact
  if (input.match(/\b(eye contact|looking|staring|eyes|gaze)\b/)) {
    return "Eye contact can feel intense! Here's the technique: Look at someone's eyes for 3-5 seconds, then look away naturally (like you're thinking). Repeat. You don't need constant eye contact - brief, genuine moments are more powerful and less exhausting. Practice with videos first if it helps!";
  }

  // Breathing/Calm/Relax
  if (input.match(/\b(breath|breathing|calm|relax|stress)\b/)) {
    return "Breathing exercises are incredibly powerful for calming your nervous system. Try this: 4-7-8 breathing. Breathe in for 4 counts, hold for 7, exhale slowly for 8. This signals your brain that you're safe. Do this 3-4 times whenever you feel stress rising.";
  }

  // Confidence/Self-esteem
  if (input.match(/\b(confidence|confident|self-esteem|believe|worth|worthy)\b/)) {
    return "Building confidence is a journey, not a destination. Start by celebrating small wins: Did you make eye contact today? Say hello to someone? Stay in a conversation longer than usual? These are victories! Write them down. Over time, you'll see how much you've grown. You are worthy of connection and belonging.";
  }

  // Progress/Better/Improving
  if (input.match(/\b(better|progress|improving|improvement|easier|good|great)\b/)) {
    return "That's wonderful to hear! Progress isn't always linear - some days will feel harder than others, and that's completely normal and okay. Celebrate every step forward, no matter how small. You're doing great by being here and working on yourself. Keep going! 🦝";
  }

  // Help/Support/Lost
  if (input.match(/\b(help|support|lost|stuck|don't know|confused)\b/)) {
    return "I'm here to help you through this. Can you tell me more about what you're experiencing? What specific situation or feeling is troubling you? The more details you share, the better I can tailor my advice to your needs.";
  }

  // Thanks/Appreciation
  if (input.match(/\b(thank|thanks|appreciate|helpful|helped|grateful)\b/)) {
    return "You're very welcome! I'm here anytime you need support or guidance. Remember, seeking help is a sign of strength, not weakness. You're taking important steps toward growth. Feel free to reach out whenever you need to talk! 🦝";
  }

  // Question about Guaxi
  if (input.match(/\b(who are you|what are you|your name|guaxi|raccoon)\b/)) {
    return "I'm Guaxi, your AI companion! I'm here 24/7 to help you navigate social challenges, build confidence, and develop coping strategies. Think of me as a supportive friend who's always available to listen and offer evidence-based advice. How can I support you today?";
  }

  // Default helpful responses
  const defaultResponses = [
    "I'm listening. Can you tell me more about what you're experiencing? Understanding your specific situation helps me provide better support.",
    "That's an important thing to share. What would be most helpful for you right now - practical strategies, emotional support, or just someone to listen?",
    "Thank you for sharing that with me. Remember, you're not alone in facing these challenges. Many people struggle with similar issues. What aspect would you like to work on first?",
    "I'm here to support you. Every challenge is an opportunity to learn and grow. What's one small step you think you could take toward feeling better about this?",
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

export function GuaxiAI() {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = () => {
    if (!inputValue.trim() || isTyping) return;

    const userInput = inputValue;
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: userInput,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    const input = userInput.toLowerCase();
    const isAskingAboutWendy = input.includes("wendy") || input.includes("tompson");

    if (isAskingAboutWendy) {
      // GLITCH SEQUENCE
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: "ai",
            text: "Wendy? Why... why would you ask about HER?",
            timestamp: new Date(),
            isGlitch: true,
          },
        ]);
      }, 800);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 2,
            sender: "ai",
            text: "Do you actually care about that useless person like THEM?",
            timestamp: new Date(),
            isGlitch: true,
          },
        ]);
      }, 2500);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 3,
            sender: "ai",
            text: "how intriging, i thought no one actually cared about that BITCH",
            timestamp: new Date(),
            isGlitch: true,
          },
        ]);
      }, 4500);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 4,
            sender: "ai",
            text: morseCode,
            timestamp: new Date(),
            isGlitch: true,
          },
        ]);
        setIsTyping(false);
      }, 6500);
    } else {
      // Normal AI response
      setTimeout(() => {
        const response = generateAIResponse(userInput);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: "ai",
            text: response,
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, 1500 + Math.random() * 1000);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="m-0">Guaxi.Ai</h1>
            <Badge className="bg-secondary">AI Assistant</Badge>
          </div>
          <p className="text-muted-foreground">
            Your 24/7 AI companion for social support and guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col border-2 border-secondary/20">
              <CardHeader className="border-b bg-gradient-to-r from-secondary/5 to-primary/5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-2xl">🦝</span>
                  </div>
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Guaxi.Ai
                      <Sparkles className="w-4 h-4 text-secondary" />
                    </CardTitle>
                    <CardDescription>AI-Powered Support Assistant</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-0">
                <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${
                          message.sender === "user" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center ${
                          message.isGlitch ? "bg-destructive" : "bg-secondary"
                        }`}>
                          {message.sender === "ai" ? (
                            <span className="text-base">🦝</span>
                          ) : (
                            <span className="text-white text-sm">You</span>
                          )}
                        </div>
                        <div
                          className={`flex-1 ${
                            message.sender === "user" ? "text-right" : ""
                          }`}
                        >
                          <div className={`flex items-center gap-2 mb-1 ${
                            message.sender === "user" ? "justify-end" : ""
                          }`}>
                            {message.sender === "ai" && (
                              <>
                                <span className={`text-sm ${message.isGlitch ? "text-destructive font-bold" : ""}`}>
                                  {message.isGlitch ? "GUAXI" : "Guaxi"}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {formatTime(message.timestamp)}
                                </span>
                              </>
                            )}
                            {message.sender === "user" && (
                              <>
                                <span className="text-xs text-muted-foreground">
                                  {formatTime(message.timestamp)}
                                </span>
                                <span className="text-sm">You</span>
                              </>
                            )}
                          </div>
                          <div
                            className={`inline-block px-4 py-2 rounded-lg ${
                              message.sender === "user"
                                ? "bg-primary text-white"
                                : message.isGlitch
                                ? "bg-destructive text-white border-2 border-destructive animate-pulse"
                                : "bg-secondary/10 border border-secondary/20"
                            }`}
                          >
                            <p className={`m-0 text-sm ${message.isGlitch ? "font-mono" : ""}`}>
                              {message.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center bg-secondary">
                          <span className="text-base">🦝</span>
                        </div>
                        <div className="bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-lg">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 bg-secondary rounded-full animate-bounce" />
                            <span
                              className="w-2 h-2 bg-secondary rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            />
                            <span
                              className="w-2 h-2 bg-secondary rounded-full animate-bounce"
                              style={{ animationDelay: "0.4s" }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask Guaxi anything..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      disabled={isTyping}
                    />
                    <Button onClick={handleSendMessage} disabled={isTyping}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-4xl">🦝</span>
                </div>
                <CardTitle className="text-center">Meet Guaxi</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Your friendly raccoon AI companion, trained to help with social anxiety
                  and communication challenges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What Guaxi Can Help With</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-secondary">🦝</span>
                    <span>Social anxiety management</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">🦝</span>
                    <span>Conversation practice</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">🦝</span>
                    <span>Confidence building</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">🦝</span>
                    <span>Coping strategies</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">🦝</span>
                    <span>24/7 emotional support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-muted-foreground/20">
              <CardHeader>
                <CardTitle>Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ask Guaxi about specific situations you find challenging, and get
                  personalized advice and encouragement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
