import { useState } from "react";
import { Search, UserX, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  status: "active" | "unavailable";
  email: string;
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Counselor",
    department: "Mental Health",
    status: "active",
    email: "sarah.j@feelingwell.com",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Support Specialist",
    department: "Client Services",
    status: "active",
    email: "michael.c@feelingwell.com",
  },
  {
    id: 3,
    name: "Wendy Tompson",
    role: "Communication Coach",
    department: "Social Skills",
    status: "unavailable",
    email: "wendy.t@feelingwell.com",
  },
  {
    id: 4,
    name: "David Martinez",
    role: "Peer Support Lead",
    department: "Community",
    status: "active",
    email: "david.m@feelingwell.com",
  },
  {
    id: 5,
    name: "Emily Roberts",
    role: "Crisis Counselor",
    department: "Emergency Services",
    status: "active",
    email: "emily.r@feelingwell.com",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Group Facilitator",
    department: "Programs",
    status: "active",
    email: "james.w@feelingwell.com",
  },
];

export function Employees() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="mb-2">Employee Directory</h1>
          <p className="text-muted-foreground">
            View employee information and availability status
          </p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, role, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredEmployees.map((employee) => (
            <Card
              key={employee.id}
              className={`${
                employee.status === "unavailable"
                  ? "border-destructive/30 bg-destructive/5"
                  : "hover:border-primary transition-colors"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="m-0">{employee.name}</h3>
                      {employee.status === "active" ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <UserX className="w-4 h-4 text-destructive" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground m-0">{employee.role}</p>
                  </div>
                  {employee.status === "unavailable" && (
                    <Badge variant="destructive" className="ml-2">
                      Not Available
                    </Badge>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Department:</span>
                    <span className="text-sm">{employee.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Email:</span>
                    <span className="text-sm">{employee.email}</span>
                  </div>
                </div>

                {employee.status === "unavailable" && (
                  <div className="mt-4 pt-4 border-t border-destructive/20">
                    <p className="text-sm text-destructive m-0">
                      This employee is currently not available. Please contact another team member for assistance.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEmployees.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="mb-2">No employees found</h3>
              <p className="text-muted-foreground m-0">
                Try adjusting your search criteria
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
