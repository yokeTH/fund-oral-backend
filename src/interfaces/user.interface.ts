interface UserBody {
  id: string;
}

interface UserCollection extends UserBody {
  displayName: string;
  isAllowed: boolean;
  point: number;
  totalUse: number;
}

export { UserBody, UserCollection };
