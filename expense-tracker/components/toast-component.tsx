"use client";

import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { toastInterface } from "./Interface/interface";

export function ToastComponent() {
  const { toast } = useToast();

  const showToast = ({ title, description, isSuccess }: toastInterface) => {
    toast({
      title: title,
      description: description,
      action: <ToastAction altText="Undo last action">Undo</ToastAction>,
    });
  };

  return { showToast };
}
