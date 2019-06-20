import * as types from '../actions-types';

export const saveGeographyAttempts = payload => ({
  type: types.game.SAVE_GEOGRAPHY_ATTEMPTS,
  payload
});

export const addMember = payload => {
  let isMember = false;
  let allMembersTwo = [];
  const { member, members, allMembers } = payload;
  members.forEach(val => {
    if (val.id === member.id) {
      allMembersTwo = [...members, member];
      console.log('here=>', allMembersTwo);
      isMember = true;
    }
  });
  if (members.length) {
    console.log('allMembers=>', [...allMembers, member]);
  }
  console.log('member action --> one', member);
  console.log('members action --> two', members);
  return {
    type: types.game.ADD_MEMBER,
    // payload: isMember ? members : [...members, member]
    payload: isMember ? members : [...members, member]
    // payload: allMembers
  };
};

export const leaveGame = payload => {
  return {
    type: types.game.LEAVE_GAME,
    payload
  };
};
