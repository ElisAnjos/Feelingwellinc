import { Phone, Mail, Clock, AlertCircle, MessageSquare, ExternalLink, Youtube } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function HelpResources() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="mb-2">Help Resources</h1>
          <p className="text-muted-foreground">
            Immediate support and resources for employees with socializing challenges
          </p>
        </div>

        <Alert className="mb-6 border-destructive/50 bg-destructive/10">
          <AlertCircle className="h-4 w-4 text-destructive" />
          <AlertTitle className="text-destructive">Crisis Support Available 24/7</AlertTitle>
          <AlertDescription>
            If you're experiencing a mental health emergency, please call our crisis line
            immediately or contact emergency services.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-6">
            <Card className="border-2 border-destructive/30 bg-destructive/5">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle>24/7 Crisis Hotline</CardTitle>
                <CardDescription>Immediate phone support for urgent situations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-destructive">
                    <p className="text-sm text-muted-foreground mb-1">Emergency Support Line</p>
                    <a
                      href="tel:1-800-555-HELP"
                      className="text-2xl text-destructive hover:underline block"
                    >
                      1-800-555-HELP
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">(1-800-555-4357)</p>
                  </div>
                  <Button className="w-full" variant="destructive" size="lg" asChild>
                    <a href="tel:1-800-555-HELP">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Text Support</CardTitle>
                <CardDescription>Prefer texting? We're here for you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-accent rounded-lg p-4 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Text "SUPPORT" to</p>
                    <p className="text-2xl text-primary">741741</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A trained crisis counselor will text you back immediately.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Non-urgent inquiries and support requests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">General Support</p>
                  <a
                    href="mailto:support@feelingwell.com"
                    className="text-primary hover:underline"
                  >
                    support@feelingwell.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Social Anxiety Support</p>
                  <a
                    href="mailto:social@feelingwell.com"
                    className="text-primary hover:underline"
                  >
                    social@feelingwell.com
                  </a>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Response time: Within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Office Hours</CardTitle>
                <CardDescription>In-person support availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-muted-foreground">
                      Walk-ins welcome during office hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-accent border-accent-foreground/10">
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
            <CardDescription>
              External organizations that specialize in social anxiety and mental health
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <a
                href="https://www.anxiety.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border bg-white hover:bg-accent transition-colors"
              >
                <div>
                  <p className="m-0">Anxiety and Depression Association</p>
                  <p className="text-sm text-muted-foreground m-0">
                    Resources and support groups
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>

              <a
                href="https://www.socialanxiety.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border bg-white hover:bg-accent transition-colors"
              >
                <div>
                  <p className="m-0">Social Anxiety Institute</p>
                  <p className="text-sm text-muted-foreground m-0">
                    Specialized treatment and information
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>

              <a
                href="https://www.nami.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border bg-white hover:bg-accent transition-colors"
              >
                <div>
                  <p className="m-0">National Alliance on Mental Illness</p>
                  <p className="text-sm text-muted-foreground m-0">
                    Education and advocacy
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 to-primary/5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle>FeelingWell YouTube Channel</CardTitle>
                <CardDescription>
                  Helpful videos, tips, and guided exercises for managing social anxiety
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Subscribe to our channel for weekly content including breathing exercises, 
                social skills tutorials, success stories, and expert advice on overcoming social challenges.
              </p>
              <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg" asChild>
                <a
                  href="https://www.youtube.com/@FeelingWellInc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  Visit Our YouTube Channel
                </a>
              </Button>
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="bg-white/50 rounded p-2">
                  <p className="text-lg m-0">150+</p>
                  <p className="text-xs text-muted-foreground m-0">Videos</p>
                </div>
                <div className="bg-white/50 rounded p-2">
                  <p className="text-lg m-0">50K+</p>
                  <p className="text-xs text-muted-foreground m-0">Subscribers</p>
                </div>
                <div className="bg-white/50 rounded p-2">
                  <p className="text-lg m-0">Weekly</p>
                  <p className="text-xs text-muted-foreground m-0">New Content</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-center text-muted-foreground m-0">
            Remember: Seeking help is a sign of strength. You don't have to face challenges alone.
          </p>
        </div>
      </div>
    </div>
  );
}