import { useForm } from 'react-hook-form';
// import { FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ModalTitle from '@/components/modal/ModalTitle';
import Textarea from '@/components/common/Textarea';
import { DateTimePicker } from '@/components/common/DateTimePicker';
import AddFile from '@/components/common/AddFile';
import AddTag from '@/components/common/AddTag';
import InputDropdown from '@/components/common/InputDropdown';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';

export function CreateCardModal() {
  const form = useForm({
    mode: 'onChange',
  });

  function handleSubmit() {}
  return (
    <div>
      <Form {...form}>
        <div className="scrollbar-hide max-h-[90vh] overflow-y-auto flex flex-col gap-[20px]">
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-8"
          >
            <ModalTitle>할 일 생성</ModalTitle>
            <div className="flex flex-col gap-8 w-full ">
              <FormField
                control={form.control}
                name="manager"
                render={({ field: { ...rest } }) => (
                  <FormItem>
                    <FormControl>
                      <InputDropdown
                        label="담당자"
                        // placeholder="이름을 입력해 주세요"
                        {...rest}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="titile"
                render={({ field: { ref, ...rest } }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        ref={ref}
                        label="제목"
                        required
                        placeholder="이름을 입력해 주세요"
                        {...rest}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field: { ref, ...rest } }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea ref={ref} label="설명" {...rest} required />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field: { ...rest } }) => (
                  <FormItem>
                    <FormControl>
                      <DateTimePicker {...rest} label="마감일" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tags"
                render={({ field: {} }) => (
                  <FormItem>
                    <FormControl>
                      <AddTag label="태그" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field: { ...rest } }) => (
                  <FormItem>
                    <FormControl>
                      <AddFile label="이미지" {...rest} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end w-full gap-[12px]">
              <Button text="modal" size="modal">
                취소
              </Button>
              <Button text="modal" size="modal" variant="violet">
                생성
              </Button>
            </div>
          </form>
        </div>
      </Form>
    </div>
  );
}
