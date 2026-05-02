import {
  Banknote,
  Briefcase,
  CalendarDays,
  Car,
  FileText,
  GraduationCap,
  Home,
  Scissors,
  ShoppingBag,
  Stethoscope,
  Utensils,
} from "lucide-react";
import type { ComponentType } from "react";
import type { ServiceIconName } from "@/lib/data";

const serviceIcons: Record<ServiceIconName, ComponentType<{ className?: string }>> = {
  utensils: Utensils,
  "shopping-bag": ShoppingBag,
  scissors: Scissors,
  home: Home,
  "graduation-cap": GraduationCap,
  banknote: Banknote,
  "calendar-days": CalendarDays,
  car: Car,
  "file-text": FileText,
  briefcase: Briefcase,
  stethoscope: Stethoscope,
};

export function ServiceIcon({ icon, className }: { icon: ServiceIconName; className?: string }) {
  const Icon = serviceIcons[icon];

  return <Icon className={className} aria-hidden="true" />;
}
