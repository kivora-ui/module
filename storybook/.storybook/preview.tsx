import type { Preview } from "@storybook/react";
import "../src/styles/tailwind.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Color theme",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" }
        ],
        title: "Theme"
      }
    }
  },
  parameters: {
    a11y: {
      test: "todo"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#101418" }
      ]
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: { width: "390px", height: "844px" }
        },
        tablet: {
          name: "Tablet",
          styles: { width: "834px", height: "1112px" }
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1280px", height: "800px" }
        }
      }
    }
  },
  decorators: [
    (Story, context) => (
      <div
        className={`${context.globals.theme === "dark" ? "dark" : ""} min-h-screen bg-background text-foreground antialiased`}
      >
        <main className="p-6">
          <Story />
        </main>
      </div>
    )
  ]
};

export default preview;
