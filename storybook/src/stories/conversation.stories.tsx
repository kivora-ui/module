import type { Meta, StoryObj } from "@storybook/react";
import { FileText, X } from "lucide-react";
import {
  Attachment,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentProgress,
  AttachmentTitle,
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  Button,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
  MessageScroller
} from "@kivora/nextjs";

const meta = {
  title: "Components/Conversation",
  component: MessageScroller,
  parameters: { layout: "centered" }
} satisfies Meta<typeof MessageScroller>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <MessageScroller className="h-[420px] w-[520px] rounded-md border border-border/70">
      <MessageGroup>
        <Message>
          <MessageAvatar>
            <Avatar className="h-8 w-8">
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <MessageHeader>Kivora Assistant</MessageHeader>
            <Bubble>
              <BubbleContent>I reviewed the upload and found one file still processing.</BubbleContent>
            </Bubble>
            <Attachment progress={64}>
              <AttachmentMedia>
                <FileText className="h-5 w-5" />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
                <AttachmentDescription>Uploading · 64%</AttachmentDescription>
                <AttachmentProgress value={64} />
              </AttachmentContent>
              <AttachmentActions>
                <Button size="icon" variant="ghost" aria-label="Remove file">
                  <X className="h-4 w-4" />
                </Button>
              </AttachmentActions>
            </Attachment>
            <MessageFooter>Just now</MessageFooter>
          </MessageContent>
        </Message>
        <Message align="end">
          <MessageContent>
            <MessageHeader>You</MessageHeader>
            <Bubble variant="primary">
              <BubbleContent>Keep it attached and continue with the summary.</BubbleContent>
            </Bubble>
            <MessageFooter>Delivered</MessageFooter>
          </MessageContent>
        </Message>
      </MessageGroup>
    </MessageScroller>
  )
};
