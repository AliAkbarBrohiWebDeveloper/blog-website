
"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Wrapper from '../shareable/Wrapper';

interface CommentSec {
  id: string;
  Author: string;
  text: string;
}

interface CommentSecProps {
  postid: string;
}

function Comment({ }: CommentSecProps) {
  const [comments, setComments] = useState<CommentSec[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: CommentSec = {
        id: new Date().toISOString(),
        Author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
      setAuthorName('');
    }
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.Author);
      setEditingCommentId(commentId);
    }
  };

  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, Author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComment('');
      setAuthorName('');
      setEditingCommentId(null);
    }
  };

  return (
    <Wrapper>
    <div className='mt-12'>
      <h3 className='text-2xl font-semibold'>Comments</h3>
      <div className='mt-4 space-y-4'>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className='p-4'>
                <div className='font-semibold'>{comment.Author}</div>
                <p>{comment.text}</p>
                <Button
                  onClick={() => handleEditComment(comment.id)}
                  className='mt-5 text-white bg-black'
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className='text-gray-400'>No comment yet</p>
        )}
      </div>

      <div className='mt-7'>
        <Input
          type='text'
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder='Your Name'
        />

        <Input
          type='text'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Add a Comment'
        />

        <Button
          onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
          className='mt-6'
        >
          {editingCommentId ? 'Save' : 'Submit'}
        </Button>
      </div>
    </div>
    </Wrapper>
  );
}

export default Comment;
