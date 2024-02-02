import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface DialogModalProps {
  children: ReactNode;
  name: ReactNode;
}

export function DialogModal({ children, name, ...rest }: DialogModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{name}</Button>
      </DialogTrigger>
      <DialogContent {...rest}>{children}</DialogContent>
    </Dialog>
  );
}
