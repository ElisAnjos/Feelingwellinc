import { Link } from "react-router";
import { Users, MessageCircle, Bot, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="mb-4">Welcome to FeelingWell INC</h1>
          <p className="text-muted-foreground">
            Your comprehensive employee support platform for mental health and social well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Employee Directory</CardTitle>
              <CardDescription>
                View and manage employee information and availability status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/employees">
                <Button className="w-full">
                  View Employees
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <MessageCircle className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle>Chat Support</CardTitle>
              <CardDescription>
                Connect with peers for tips, encouragement, and support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/chat">
                <Button className="w-full" variant="outline">
                  Start Chatting
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary transition-colors bg-gradient-to-br from-secondary/5 to-primary/5">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-3">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="flex items-center gap-2">
                Guaxi.Ai
                <span className="text-xs bg-secondary text-white px-2 py-0.5 rounded">NEW</span>
              </CardTitle>
              <CardDescription>
                AI-powered support assistant available 24/7 to help with your needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/guaxi-ai">
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Talk to Guaxi
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-destructive transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-destructive" />
              </div>
              <CardTitle>Help Resources</CardTitle>
              <CardDescription>
                Emergency contacts and resources for immediate assistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/help">
                <Button className="w-full" variant="destructive">
                  Get Help Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-accent border-accent-foreground/10">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="mb-2">Need Immediate Support?</h3>
              <p className="text-muted-foreground mb-4">
                Our help line is available 24/7 for employees facing social anxiety or communication challenges
              </p>
              <Link to="/help">
                <Button size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
