export interface Main {
  title: string;
  name: string;
  image: {
    asset: {
      _ref: string
    }
  };
  bio: Array<unknown>;
  about: Array<unknown>;
  frontendStack: string;
  backendStack: string;
  _createdAt?: Date;
  _id: string;
  description: Array<unknown>;
  socials: { github?: string, linkedin?: string };
}

