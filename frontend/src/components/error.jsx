import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

export default function Error({ message }) {
  return (
    <div className="flex gap-2 p-3 bg-destructive/10 border border-destructive rounded-xl">
      <AiOutlineExclamationCircle className="w-5 h-5 fill-destructive shrink-0" />
      <p className="text-xs text-foreground font-mono">{message}</p>
    </div>
  );
}
