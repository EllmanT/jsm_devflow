"use client";

import { useEffect } from "react";

import { toast } from "@/hooks/use-toast";
import { incrementView } from "@/lib/actions/question.action";

const Views = ({ questionId }: { questionId: string }) => {
  const handleIncrement = async () => {
    const result = await incrementView({ questionId });

    if (result.success) {
      toast({
        title: "Success",
        description: "Views incremented ",
      });
    } else {
      toast({
        title: "Error",
        description: result.error?.message,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    handleIncrement();
  }, []);
  return null;
};

export default Views;
