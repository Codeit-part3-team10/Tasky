import React, { useEffect, useState } from 'react';
import useGetComments from '@/hooks/useGetComment';
import { DateTime } from 'ts-luxon';
import { axiosAuthInstance } from '@/libs/axiosAuthInstance';
import { Controller, useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import { Comment } from '@/types/DashboardType';
import { Avatar } from '@/components/ui/avatar';

interface CommentListProps {
  cardId: number;
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

interface CommentInputState {
  [key: number]: boolean;
}

function CommentList({ cardId, comments, setComments }: CommentListProps) {
  const [isCommentInputOpen, setIsCommentInputOpen] = useState<CommentInputState>({});
  const { control, watch, setError } = useForm();
  const { execute: getComments, data } = useGetComments({ cardId });

  useEffect(() => {
    getComments();
    if (!data) return;
    setComments(data?.comments);
  }, [comments]);
  const formatTime = (date: string) => {
    return DateTime.fromISO(date).toFormat('yyyy-MM-dd');
  };

  const handleDeleteComment = async (commentId: number) => {
    try {
      const res = await axiosAuthInstance().delete(`comments/${commentId}`);
      if (res.status === 204) {
        alert('댓글을 삭제했습니다.');
      }
    } catch (error) {
      alert('삭제할 수 없습니다.');
    } finally {
      getComments();
    }
  };

  const handleUpdateComment = async (commentId: number) => {
    try {
      const res = await axiosAuthInstance().put(`comments/${commentId}`, {
        content: watch('commentInput'),
      });
      toggleCommentInput(commentId);
      getComments();
    } catch (error) {
      if (isAxiosError(error)) {
        setError('commentInput', error.response?.data.message);
      }
      console.error(error);
    }
  };

  const toggleCommentInput = (commentId: number) => {
    setIsCommentInputOpen((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  return (
    <div className="flex gap-[10px] overflow-y-scroll  flex-col h-[160px]">
      {data?.comments.map((comment: Comment) => (
        <div key={comment?.id} className="flex gap-[10px]">
          <Avatar size="m" nickname={comment?.author.nickname} profileImageUrl={comment.author.profileImageUrl} />
          <div className="flex flex-col gap-[6px]">
            <div className="space-x-[8px]">
              <span className="font-semibold text-[14px] mobile:text-[12px]">{comment?.author.nickname}</span>
              <span className="text-gray40 text-[12px] mobile:text-[10px]">{formatTime(comment?.createdAt)}</span>
            </div>
            {isCommentInputOpen[comment?.id] ? (
              <Controller
                control={control}
                name="commentInput"
                render={({ field: { ...rest } }) => (
                  <form
                    className="space-x-[6px] flex"
                    onSubmit={(e) => {
                      e.preventDefault(); // 기본 submit 동작을 막음
                      handleUpdateComment(comment?.id);
                    }}
                  >
                    <input
                      type="text"
                      {...rest}
                      placeholder={comment.content}
                      className="border border-gray30 rounded-md indent-[8px] placeholder:text-[12px] focus:outline-none"
                    />
                    <button type="button" className="text-[12px]">
                      완료
                    </button>
                  </form>
                )}
              />
            ) : (
              <p className="text-[14px] mobile:text-[12px]">{comment?.content}</p>
            )}

            <div className="flex gap-[12px]">
              <button
                className="text-gray40 text-[12px] underline mobile:text-[10px]"
                type="button"
                onClick={() => toggleCommentInput(comment?.id)}
              >
                {isCommentInputOpen[comment.id] ? '취소' : '수정'}
              </button>
              <button
                className="text-gray40 text-[12px] underline mobile:text-[10px]"
                type="button"
                onClick={() => handleDeleteComment(comment?.id)}
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
