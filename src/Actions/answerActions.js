export const CHOOSE_ANSWER = 'CHOSED';
export const RESET_ANSWER = 'RESET_ANSWER';
export const BLOCK_ANSWER = 'BLOCK_ANSWER';
export const UNBLOCK_ANSWER = 'UNBLOCK_ANSWER';

export const chooseAnswer = () => ({
  type: CHOOSE_ANSWER,
});

export const resetAnswer = () => ({
  type: RESET_ANSWER,
});

export const blockAnswer = () => ({
  type: BLOCK_ANSWER,
});

export const unblockAnswer = () => ({
  type: UNBLOCK_ANSWER,
});
