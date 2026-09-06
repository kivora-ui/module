import type { Meta, StoryObj } from "@storybook/react";
import {
  Activity,
  Bell,
  CreditCard,
  KeyRound,
  Settings,
  ShieldCheck,
  UserRound
} from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@kivora/nextjs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs
};

export default meta;
type Story = StoryObj<typeof Tabs>;

type PlaygroundStory = StoryObj<{
  fullWidth: boolean;
  size: "sm" | "md" | "lg";
  variant: "default" | "underline" | "pills";
}>;

const workspaceItems = [
  { label: "Overview", value: "overview", icon: Activity },
  { label: "Members", value: "members", icon: UserRound },
  { label: "Billing", value: "billing", icon: CreditCard }
];

export const Default: PlaygroundStory = {
  args: {
    fullWidth: false,
    size: "md",
    variant: "default"
  },
  argTypes: {
    fullWidth: { control: "boolean" },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    variant: { control: "radio", options: ["default", "underline", "pills"] }
  },
  render: ({ fullWidth, size, variant }) => (
    <Tabs defaultValue="overview" className="w-full max-w-3xl">
      <TabsList fullWidth={fullWidth} size={size} variant={variant}>
        {workspaceItems.map((item) => (
          <TabsTrigger key={item.value} value={item.value} size={size} variant={variant}>
            <item.icon className="mr-2 h-4 w-4" aria-hidden="true" />
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="overview" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Workspace health</CardTitle>
            <CardDescription>Current operational summary for the product team.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            {[
              ["Revenue", "$24.8k", "+12%"],
              ["Active seats", "38", "+4"],
              ["Open tasks", "17", "-6"]
            ].map(([label, value, delta]) => (
              <div key={label} className="rounded-md border border-border/70 p-3">
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="text-xl font-semibold">{value}</span>
                  <Badge variant="secondary">{delta}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="members" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Members</CardTitle>
            <CardDescription>Manage visible team identity and access.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="team-name">Team name</Label>
                <Input id="team-name" defaultValue="Kivora Product" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="owner">Owner</Label>
                <Input id="owner" defaultValue="Marta Ruiz" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="billing" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Billing</CardTitle>
            <CardDescription>Plan usage and renewal information.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-4 rounded-md border border-border/70 p-4">
            <div>
              <div className="font-medium">Scale plan</div>
              <div className="text-sm text-muted-foreground">Renews on September 28.</div>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
};

export const UnderlineNavigation: Story = {
  render: () => (
    <Tabs defaultValue="security" className="w-full max-w-4xl">
      <TabsList fullWidth variant="underline">
        <TabsTrigger value="profile" variant="underline">
          <UserRound className="mr-2 h-4 w-4" aria-hidden="true" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="security" variant="underline">
          <ShieldCheck className="mr-2 h-4 w-4" aria-hidden="true" />
          Security
        </TabsTrigger>
        <TabsTrigger value="notifications" variant="underline">
          <Bell className="mr-2 h-4 w-4" aria-hidden="true" />
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="mt-5 text-sm text-muted-foreground">
        Public profile and workspace identity.
      </TabsContent>
      <TabsContent value="security" className="mt-5 grid gap-3 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <KeyRound className="h-4 w-4" aria-hidden="true" />
              Two-factor auth
            </CardTitle>
            <CardDescription>Require an additional verification step for owners.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Settings className="h-4 w-4" aria-hidden="true" />
              Session controls
            </CardTitle>
            <CardDescription>Review active devices and automatic sign-out rules.</CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="notifications" className="mt-5 text-sm text-muted-foreground">
        Email and product update preferences.
      </TabsContent>
    </Tabs>
  )
};

export const Pills: Story = {
  render: () => (
    <Tabs defaultValue="week" className="w-full max-w-xl">
      <TabsList fullWidth variant="pills" size="sm">
        <TabsTrigger value="day" variant="pills" size="sm">Day</TabsTrigger>
        <TabsTrigger value="week" variant="pills" size="sm">Week</TabsTrigger>
        <TabsTrigger value="month" variant="pills" size="sm">Month</TabsTrigger>
        <TabsTrigger value="year" variant="pills" size="sm" disabled>Year</TabsTrigger>
      </TabsList>
      <TabsContent value="day" className="mt-4 text-sm text-muted-foreground">Daily activity view.</TabsContent>
      <TabsContent value="week" className="mt-4 text-sm text-muted-foreground">Weekly activity view.</TabsContent>
      <TabsContent value="month" className="mt-4 text-sm text-muted-foreground">Monthly activity view.</TabsContent>
    </Tabs>
  )
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="profile" orientation="vertical" className="flex w-full max-w-4xl flex-col gap-5 sm:flex-row sm:gap-6">
      <TabsList variant="underline" className="w-full shrink-0 sm:w-48">
        <TabsTrigger value="profile" variant="underline">
          <UserRound className="mr-2 h-4 w-4" aria-hidden="true" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="security" variant="underline">
          <ShieldCheck className="mr-2 h-4 w-4" aria-hidden="true" />
          Security
        </TabsTrigger>
        <TabsTrigger value="billing" variant="underline">
          <CreditCard className="mr-2 h-4 w-4" aria-hidden="true" />
          Billing
        </TabsTrigger>
        <TabsTrigger value="notifications" variant="underline" disabled>
          <Bell className="mr-2 h-4 w-4" aria-hidden="true" />
          Alerts
        </TabsTrigger>
      </TabsList>
      <div className="min-h-56 min-w-0 flex-1">
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile details</CardTitle>
              <CardDescription>Identity and workspace visibility for this account.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="vertical-name">Name</Label>
                <Input id="vertical-name" defaultValue="Marta Ruiz" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vertical-handle">Handle</Label>
                <Input id="vertical-handle" defaultValue="@marta" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security posture</CardTitle>
              <CardDescription>Review account safeguards and active sessions.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-border/70 p-3">
                <div className="font-medium">Two-factor auth</div>
                <div className="text-sm text-muted-foreground">Enabled for all admins.</div>
              </div>
              <div className="rounded-md border border-border/70 p-3">
                <div className="font-medium">Session timeout</div>
                <div className="text-sm text-muted-foreground">After 24 hours of inactivity.</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing controls</CardTitle>
              <CardDescription>Plan, invoices, and payment methods.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-4 rounded-md border border-border/70 p-4">
              <div>
                <div className="font-medium">Scale plan</div>
                <div className="text-sm text-muted-foreground">38 seats active.</div>
              </div>
              <Button variant="outline" size="sm">Review</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  )
};
