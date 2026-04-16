import { useState, useRef, useEffect } from "react";
import { Send, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  id: number;
  sender: "user" | "peer";
  senderName: string;
  text: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "peer",
    senderName: "Sarah J.",
    text: "Hi there! Welcome to the chat support. How are you feeling today?",
    timestamp: new Date(Date.now() - 300000),
  },
];

function generateResponse(userInput: string): string {
  const input = userInput.toLowerCase();

  // Check for Wendy first - highest priority
  if (input.includes("wendy") || input.includes("tompson")) {
    const wendyResponses = [
      "Wait... you're asking about Wendy Tompson? I haven't seen them in weeks. Are you okay? Do you know where she is?",
      "Wendy... oh no. I've been worried sick about her. She just disappeared afer she got fired. Have you heard from her? Please tell me she's safe.",
      "That's... that's concerning. Nobody knows what happened. Why are you asking about her?",
      "I'm really worried about Wendy. She was going through something before she vanished. Do you know something we don't?",
    ];
    return wendyResponses[Math.floor(Math.random() * wendyResponses.length)];
  }

  // Greetings
  if (input.match(/\b(hi|hello|hey|good morning|good afternoon|good evening)\b/)) {
    return "Hey! I'm glad you're here. What's been on your mind lately?";
  }

  // Anxiety/Nervous/Scared
  if (input.match(/\b(anxious|anxiety|nervous|scared|worried|panic|fear)\b/)) {
    return "I totally understand feeling anxious. When I feel that way, I use the 5-4-3-2-1 technique: Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. It really helps ground me in the moment. Have you tried any grounding techniques?";
  }

  // Meetings/Presentations/Work
  if (input.match(/\b(meeting|presentation|work|job|office|coworker|colleague|boss)\b/)) {
    return "Work situations can be really stressful! I find it helpful to prepare 2-3 talking points before meetings. Even just having them written down reduces my anxiety. Also, remember that everyone in that meeting has probably felt nervous too - you're not alone in this.";
  }

  // Conversation/Talking
  if (input.match(/\b(talk|talking|conversation|speak|speaking|chat|say)\b/)) {
    return "Starting conversations can feel overwhelming, right? I've learned to start with simple observations or compliments - like commenting on the weather or something in the environment. It's low-pressure and usually leads naturally to more conversation. What situations do you find hardest?";
  }

  // Friends/Social/Party
  if (input.match(/\b(friend|friends|social|party|gathering|event|people)\b/)) {
    return "Social situations can be tough. One thing that helps me is arriving early to events - it's easier to talk to people one-on-one as they arrive rather than walking into a room full of people. Also, it's totally okay to take breaks when you need them!";
  }

  // Eye contact
  if (input.match(/\b(eye contact|looking|staring|eyes)\b/)) {
    return "Eye contact was so hard for me too! A technique I learned: look at someone for 3-5 seconds, then glance away naturally. You don't have to maintain constant eye contact - even brief moments show you're engaged. It gets easier with practice, I promise.";
  }

  // Help/Don't know
  if (input.match(/\b(help|don't know|confused|lost|stuck)\b/)) {
    return "It's okay to feel stuck sometimes. What specifically are you struggling with? I'm here to listen and share what's worked for me. Sometimes just talking it through helps clarify things.";
  }

  // Thanks/Appreciation
  if (input.match(/\b(thank|thanks|appreciate|helpful|helped)\b/)) {
    return "You're so welcome! I'm really glad I could help. We're all in this together, and sharing what we've learned makes us all stronger. Feel free to reach out anytime!";
  }

  // Feeling better/progress
  if (input.match(/\b(better|progress|improving|good|great|easier)\b/)) {
    return "That's amazing to hear! Celebrate those wins, no matter how small they seem. Progress isn't always linear, but you're moving forward and that's what matters. Keep it up!";
  }

  // Default responses based on context
  const supportResponses = [
    "I hear you. Social situations can be really challenging. What specific aspect is bothering you most right now?",
    "That sounds tough. Remember, though - most people are so focused on themselves that they're not judging you as much as you might think. Have you tried reframing your thoughts?",
    "I've been there. One thing that helped me was starting small - maybe just saying hi to one person a day. Baby steps are still steps forward!",
    "Your feelings are completely valid. Progress takes time, and it's different for everyone. What's one small thing you think you could try today?",
    "I understand. Before I go into situations like that, I practice positive self-talk: 'I am capable, my thoughts matter, I can do this.' It sounds simple but it really helps shift my mindset.",
  ];

  return supportResponses[Math.floor(Math.random() * supportResponses.length)];
}

export function ChatSupport() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isResponding, setIsResponding] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim() || isResponding) return;

    const userInput = inputValue;
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      senderName: "You",
      text: userInput,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsResponding(true);

    // Simulate peer typing and response
    setTimeout(() => {
      const response = generateResponse(userInput);
      const peerMessage: Message = {
        id: Date.now() + 1,
        sender: "peer",
        senderName: "Sarah J.",
        text: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, peerMessage]);
      setIsResponding(false);
    }, 1000 + Math.random() * 2000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="mb-2">Chat Support</h1>
          <p className="text-muted-foreground">
            Connect with peer supporters for encouragement and tips
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <CardTitle>Active Chat</CardTitle>
                <CardDescription>Peer Support Session</CardDescription>
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
                        <Avatar className="w-8 h-8 flex-shrink-0">
                          <AvatarFallback
                            className={
                              message.sender === "user"
                                ? "bg-primary text-white"
                                : "bg-secondary text-white"
                            }
                          >
                            {message.sender === "user" ? (
                              <User className="w-4 h-4" />
                            ) : (
                              message.senderName.substring(0, 2)
                            )}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`flex-1 ${
                            message.sender === "user" ? "text-right" : ""
                          }`}
                        >
                          <div className={`flex items-center gap-2 mb-1 ${
                            message.sender === "user" ? "justify-end" : ""
                          }`}>
                            {message.sender === "peer" && (
                              <>
                                <span className="text-sm">{message.senderName}</span>
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
                                <span className="text-sm">{message.senderName}</span>
                              </>
                            )}
                          </div>
                          <div
                            className={`inline-block px-4 py-2 rounded-lg ${
                              message.sender === "user"
                                ? "bg-primary text-white"
                                : "bg-muted"
                            }`}
                          >
                            <p className="m-0 text-sm">{message.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isResponding && (
                      <div className="flex gap-3">
                        <Avatar className="w-8 h-8 flex-shrink-0">
                          <AvatarFallback className="bg-secondary text-white">
                            SJ
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-muted px-4 py-2 rounded-lg">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                            <span
                              className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            />
                            <span
                              className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
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
                      placeholder="Type your message..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      disabled={isResponding}
                    />
                    <Button onClick={handleSendMessage} disabled={isResponding}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Chat Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Be respectful and supportive</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Share your experiences openly</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Listen actively to others</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Maintain confidentiality</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-accent border-accent-foreground/10">
              <CardHeader>
                <CardTitle>Need More Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  If you need immediate support, try our AI assistant or contact our help line.
                </p>
                <div className="space-y-2">
                  <Button className="w-full" variant="outline" asChild>
                    <a href="/guaxi-ai">Talk to Guaxi.Ai</a>
                  </Button>
                  <Button className="w-full" variant="destructive" asChild>
                    <a href="/help">Help Resources</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
