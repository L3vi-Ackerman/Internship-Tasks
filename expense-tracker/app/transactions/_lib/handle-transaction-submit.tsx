import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

const { toast } = useToast();

export const handleTransactionSubmit = (success: boolean) => {
  if (success) {
    toast({
      title: "Success",
      description: "Transaction added successfully!",
      action: <ToastAction altText="Undo last action">Undo</ToastAction>,
    });
  } else {
    toast({
      title: "Failure",
      description: "Failed to add transaction!",
      action: <ToastAction altText="Undo last action">Undo</ToastAction>,
    });
  }
};
