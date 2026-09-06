"use client";

import type { ReactNode } from "react";
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  TypographyH1,
} from "@kivora/nextjs";
import { Plus } from "lucide-react";
import type { Product } from "@/lib/data";

export function PageHeading({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="page-heading">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <TypographyH1 className="page-title">{title}</TypographyH1>
        <p className="muted">{description}</p>
      </div>
      <div className="heading-actions">{children}</div>
    </div>
  );
}
export function Panel({
  title,
  action,
  children,
  className = "",
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={`panel ${className}`}>
      <CardHeader className="panel-header">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        {action}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
export function StockBadge({ product }: { product: Product }) {
  return (
    <Badge
      className={
        product.stock === 0
          ? "status-red"
          : product.stock < product.minimum
            ? "status-amber"
            : "status-green"
      }
      variant="secondary"
    >
      <span className="status-dot" />
      {product.stock === 0
        ? "Agotado"
        : product.stock < product.minimum
          ? "Stock bajo"
          : "Disponible"}
    </Badge>
  );
}
export function ProductArt({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`product-art ${product.color} ${compact ? "compact" : ""}`}
    >
      <div
        className={`product-package ${["Higiene", "Dermocosmética"].includes(product.category) ? "bottle" : "box"}`}
      >
        <span className="package-brand">{product.brand}</span>
        <Plus className="package-cross" />
        <span className="package-rule" />
        <span className="package-caption">DAILY CARE</span>
      </div>
    </div>
  );
}
