import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AddNewPollInput = {
  color: Scalars['String'];
  desc: Scalars['String'];
  imgSrc: Scalars['String'];
  name: Scalars['String'];
  progressColor: Scalars['String'];
};

export type Answer = {
  __typename?: 'Answer';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  question: Question;
  questionId: Scalars['String'];
  value: Scalars['String'];
};

export type AnswerInput = {
  id: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type CreateFolderType = {
  __typename?: 'CreateFolderType';
  name: Scalars['String'];
  path: Scalars['String'];
  success: Scalars['Boolean'];
};

export type GetMembersOutput = {
  __typename?: 'GetMembersOutput';
  currentMember: Members;
  nextMember: NextPrevMemberItem;
  previousMember: NextPrevMemberItem;
};

export type HomeDataReturn = {
  __typename?: 'HomeDataReturn';
  countActivePolls: Scalars['Float'];
  countActiveVoters: Scalars['Float'];
  countAnswers: Scalars['Float'];
};

export type MemberInput = {
  company?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  isBoard: Scalars['Boolean'];
  lastName?: InputMaybe<Scalars['String']>;
  logos?: InputMaybe<Array<Scalars['String']>>;
  longDesc?: InputMaybe<Scalars['String']>;
  memberCategory?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  shortDesc?: InputMaybe<Scalars['String']>;
};

export type Members = {
  __typename?: 'Members';
  company: Scalars['String'];
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  imgUrl: Scalars['String'];
  isBoard: Scalars['Boolean'];
  lastName: Scalars['String'];
  logos?: Maybe<Array<Scalars['String']>>;
  longDesc: Scalars['String'];
  memberCategory: Scalars['String'];
  role: Scalars['String'];
  shortDesc: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewPoll: Poll;
  authVoter: Scalars['String'];
  changeUserStatus: Scalars['Boolean'];
  completeVote: Scalars['Boolean'];
  draftPoll: Scalars['Boolean'];
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  publishPoll: Scalars['Boolean'];
  removeAnswer: Scalars['Boolean'];
  removeFiles: Scalars['Boolean'];
  removeFolder: Scalars['Boolean'];
  removeMember: Scalars['Boolean'];
  removeQuestion: Scalars['Boolean'];
  removeSendedAnswer: Scalars['Boolean'];
  sendAnswer: Scalars['Boolean'];
  subscribeEmail: Scalars['Boolean'];
  updateAnswer: Answer;
  updateMember: Members;
  updateQuestion: Question;
};


export type MutationAddNewPollArgs = {
  data: AddNewPollInput;
};


export type MutationAuthVoterArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  pollSlug: Scalars['String'];
};


export type MutationChangeUserStatusArgs = {
  email: Scalars['String'];
};


export type MutationCompleteVoteArgs = {
  slug: Scalars['String'];
};


export type MutationDraftPollArgs = {
  pollId: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationPublishPollArgs = {
  pollId: Scalars['String'];
};


export type MutationRemoveAnswerArgs = {
  answerId: Scalars['String'];
};


export type MutationRemoveFilesArgs = {
  publicIds: Array<Scalars['String']>;
};


export type MutationRemoveFolderArgs = {
  folderName: Scalars['String'];
};


export type MutationRemoveMemberArgs = {
  id: Scalars['String'];
};


export type MutationRemoveQuestionArgs = {
  questionId: Scalars['String'];
};


export type MutationRemoveSendedAnswerArgs = {
  data: RemoveAnswerInput;
};


export type MutationSendAnswerArgs = {
  data: SendAnswerInput;
};


export type MutationSubscribeEmailArgs = {
  email: Scalars['String'];
};


export type MutationUpdateAnswerArgs = {
  data: UpdateAnswerInput;
};


export type MutationUpdateMemberArgs = {
  data: UpdateMemberInput;
};


export type MutationUpdateQuestionArgs = {
  data: UpdateQuestionInput;
};

export type NextPrevMemberItem = {
  __typename?: 'NextPrevMemberItem';
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
};

export type Poll = {
  __typename?: 'Poll';
  color: Scalars['String'];
  desc: Scalars['String'];
  id: Scalars['ID'];
  imgSrc: Scalars['String'];
  isPublished: Scalars['Boolean'];
  name: Scalars['String'];
  owner: User;
  progressColor: Scalars['String'];
  questions?: Maybe<Array<Question>>;
  slug: Scalars['String'];
  votes?: Maybe<Array<Vote>>;
};

export type Query = {
  __typename?: 'Query';
  createFolder: CreateFolderType;
  downloadVotes: Poll;
  getAllMembers: Array<Members>;
  getAllPolls: Array<Poll>;
  getAllUsers: Array<User>;
  getAllVoters: Array<Voter>;
  getAllVotes: Array<Scalars['String']>;
  getMembers: GetMembersOutput;
  getPoll: Poll;
  getStatisticsVotes: Array<Statistics>;
  getVote: Vote;
  getVotes: Array<Vote>;
  homeData: HomeDataReturn;
  me: User;
  meVoter: Voter;
  signRequest: SignatureType;
};


export type QueryCreateFolderArgs = {
  folderName: Scalars['String'];
};


export type QueryDownloadVotesArgs = {
  pollId: Scalars['String'];
};


export type QueryGetAllMembersArgs = {
  slug: Scalars['String'];
};


export type QueryGetAllVotesArgs = {
  pollSlug: Scalars['String'];
};


export type QueryGetMembersArgs = {
  id: Scalars['String'];
};


export type QueryGetPollArgs = {
  slug: Scalars['String'];
};


export type QueryGetStatisticsVotesArgs = {
  pollSlug: Scalars['String'];
};


export type QueryGetVoteArgs = {
  answerId: Scalars['String'];
};


export type QueryGetVotesArgs = {
  pollSlug: Scalars['String'];
};


export type QuerySignRequestArgs = {
  params?: InputMaybe<SignRequestInput>;
};

export type Question = {
  __typename?: 'Question';
  answers: Array<Answer>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isRequired: Scalars['Boolean'];
  poll: Poll;
  pollId: Scalars['String'];
  questionName: Scalars['String'];
  typeAnswer: Scalars['String'];
};

export type QuestionInput = {
  id: Scalars['String'];
  isRequired: Scalars['Boolean'];
  questionName: Scalars['String'];
  typeAnswer: Scalars['String'];
};

export type RemoveAnswerInput = {
  answerId: Scalars['String'];
  typeOfAnswer: Scalars['String'];
};

export type SendAnswerInput = {
  answerId: Scalars['String'];
  typeOfAnswer: Scalars['String'];
  value: Scalars['String'];
};

export type SignatureType = {
  __typename?: 'SignatureType';
  signature: Scalars['String'];
  timestamp: Scalars['Float'];
};

export type Statistics = {
  __typename?: 'Statistics';
  answerId: Scalars['String'];
  count: Scalars['Float'];
};

export type UpdateMemberInput = {
  member: MemberInput;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  polls: Array<Poll>;
  status: Scalars['Boolean'];
};

export type Vote = {
  __typename?: 'Vote';
  answer: Answer;
  answerId: Scalars['String'];
  answerValue: Scalars['String'];
  id: Scalars['ID'];
  poll: Poll;
  pollId: Scalars['String'];
  question: Question;
  questionId: Scalars['String'];
  status: Scalars['Boolean'];
  voter: Voter;
  voterId: Scalars['String'];
};

export type Voter = {
  __typename?: 'Voter';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  votes: Array<Vote>;
};

export type SignRequestInput = {
  folder?: InputMaybe<Scalars['String']>;
};

export type UpdateAnswerInput = {
  answer: AnswerInput;
  questionId: Scalars['String'];
};

export type UpdateQuestionInput = {
  pollId: Scalars['String'];
  question: QuestionInput;
};

export type RemoveAnswerMutationVariables = Exact<{
  data: RemoveAnswerInput;
}>;


export type RemoveAnswerMutation = { __typename?: 'Mutation', removeSendedAnswer: boolean };

export type SendAnswerMutationVariables = Exact<{
  data: SendAnswerInput;
}>;


export type SendAnswerMutation = { __typename?: 'Mutation', sendAnswer: boolean };

export type SignRequestQueryVariables = Exact<{
  params?: InputMaybe<SignRequestInput>;
}>;


export type SignRequestQuery = { __typename?: 'Query', signRequest: { __typename?: 'SignatureType', timestamp: number, signature: string } };

export type GetAllMembersQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetAllMembersQuery = { __typename?: 'Query', getAllMembers: Array<{ __typename?: 'Members', id: string, firstName: string, lastName: string, role: string, company: string, memberCategory: string, shortDesc: string, longDesc: string, imgUrl: string, logos?: Array<string> | null, isBoard: boolean }> };

export type GetMembersQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMembersQuery = { __typename?: 'Query', getMembers: { __typename?: 'GetMembersOutput', currentMember: { __typename?: 'Members', id: string, firstName: string, lastName: string, role: string, company: string, memberCategory: string, shortDesc: string, longDesc: string, imgUrl: string, logos?: Array<string> | null, isBoard: boolean }, nextMember: { __typename?: 'NextPrevMemberItem', id: string, firstName: string, lastName: string }, previousMember: { __typename?: 'NextPrevMemberItem', id: string, firstName: string, lastName: string } } };

export type GetAllPollsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPollsQuery = { __typename?: 'Query', getAllPolls: Array<{ __typename?: 'Poll', id: string, name: string, imgSrc: string, desc: string, slug: string }> };

export type GetPollQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPollQuery = { __typename?: 'Query', getPoll: { __typename?: 'Poll', id: string, name: string, slug: string, isPublished: boolean, desc: string, color: string, progressColor: string, imgSrc: string, questions?: Array<{ __typename?: 'Question', id: string, questionName: string, typeAnswer: string, isRequired: boolean, answers: Array<{ __typename?: 'Answer', createdAt: any, id: string, name: string, value: string }> }> | null } };

export type CompleteVoteMutationVariables = Exact<{
  slug: Scalars['String'];
}>;


export type CompleteVoteMutation = { __typename?: 'Mutation', completeVote: boolean };

export type AuthVoterMutationVariables = Exact<{
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  pollSlug: Scalars['String'];
}>;


export type AuthVoterMutation = { __typename?: 'Mutation', authVoter: string };

export type SubscribeEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SubscribeEmailMutation = { __typename?: 'Mutation', subscribeEmail: boolean };

export type GetAllVotesQueryVariables = Exact<{
  pollSlug: Scalars['String'];
}>;


export type GetAllVotesQuery = { __typename?: 'Query', getAllVotes: Array<string> };

export type GetVotesQueryVariables = Exact<{
  pollSlug: Scalars['String'];
}>;


export type GetVotesQuery = { __typename?: 'Query', getVotes: Array<{ __typename?: 'Vote', answerValue: string, answerId: string }> };

export type MeVoterQueryVariables = Exact<{ [key: string]: never; }>;


export type MeVoterQuery = { __typename?: 'Query', meVoter: { __typename?: 'Voter', id: string, email: string } };


export const RemoveAnswerDocument = gql`
    mutation removeAnswer($data: RemoveAnswerInput!) {
  removeSendedAnswer(data: $data)
}
    `;
export type RemoveAnswerMutationFn = Apollo.MutationFunction<RemoveAnswerMutation, RemoveAnswerMutationVariables>;

/**
 * __useRemoveAnswerMutation__
 *
 * To run a mutation, you first call `useRemoveAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAnswerMutation, { data, loading, error }] = useRemoveAnswerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRemoveAnswerMutation(baseOptions?: Apollo.MutationHookOptions<RemoveAnswerMutation, RemoveAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveAnswerMutation, RemoveAnswerMutationVariables>(RemoveAnswerDocument, options);
      }
export type RemoveAnswerMutationHookResult = ReturnType<typeof useRemoveAnswerMutation>;
export type RemoveAnswerMutationResult = Apollo.MutationResult<RemoveAnswerMutation>;
export type RemoveAnswerMutationOptions = Apollo.BaseMutationOptions<RemoveAnswerMutation, RemoveAnswerMutationVariables>;
export const SendAnswerDocument = gql`
    mutation sendAnswer($data: SendAnswerInput!) {
  sendAnswer(data: $data)
}
    `;
export type SendAnswerMutationFn = Apollo.MutationFunction<SendAnswerMutation, SendAnswerMutationVariables>;

/**
 * __useSendAnswerMutation__
 *
 * To run a mutation, you first call `useSendAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendAnswerMutation, { data, loading, error }] = useSendAnswerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendAnswerMutation(baseOptions?: Apollo.MutationHookOptions<SendAnswerMutation, SendAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendAnswerMutation, SendAnswerMutationVariables>(SendAnswerDocument, options);
      }
export type SendAnswerMutationHookResult = ReturnType<typeof useSendAnswerMutation>;
export type SendAnswerMutationResult = Apollo.MutationResult<SendAnswerMutation>;
export type SendAnswerMutationOptions = Apollo.BaseMutationOptions<SendAnswerMutation, SendAnswerMutationVariables>;
export const SignRequestDocument = gql`
    query signRequest($params: signRequestInput) {
  signRequest(params: $params) {
    timestamp
    signature
  }
}
    `;

/**
 * __useSignRequestQuery__
 *
 * To run a query within a React component, call `useSignRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useSignRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignRequestQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useSignRequestQuery(baseOptions?: Apollo.QueryHookOptions<SignRequestQuery, SignRequestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SignRequestQuery, SignRequestQueryVariables>(SignRequestDocument, options);
      }
export function useSignRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SignRequestQuery, SignRequestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SignRequestQuery, SignRequestQueryVariables>(SignRequestDocument, options);
        }
export type SignRequestQueryHookResult = ReturnType<typeof useSignRequestQuery>;
export type SignRequestLazyQueryHookResult = ReturnType<typeof useSignRequestLazyQuery>;
export type SignRequestQueryResult = Apollo.QueryResult<SignRequestQuery, SignRequestQueryVariables>;
export const GetAllMembersDocument = gql`
    query getAllMembers($slug: String!) {
  getAllMembers(slug: $slug) {
    id
    firstName
    lastName
    role
    company
    memberCategory
    shortDesc
    longDesc
    imgUrl
    logos
    isBoard
  }
}
    `;

/**
 * __useGetAllMembersQuery__
 *
 * To run a query within a React component, call `useGetAllMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMembersQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetAllMembersQuery(baseOptions: Apollo.QueryHookOptions<GetAllMembersQuery, GetAllMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMembersQuery, GetAllMembersQueryVariables>(GetAllMembersDocument, options);
      }
export function useGetAllMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMembersQuery, GetAllMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMembersQuery, GetAllMembersQueryVariables>(GetAllMembersDocument, options);
        }
export type GetAllMembersQueryHookResult = ReturnType<typeof useGetAllMembersQuery>;
export type GetAllMembersLazyQueryHookResult = ReturnType<typeof useGetAllMembersLazyQuery>;
export type GetAllMembersQueryResult = Apollo.QueryResult<GetAllMembersQuery, GetAllMembersQueryVariables>;
export const GetMembersDocument = gql`
    query getMembers($id: String!) {
  getMembers(id: $id) {
    currentMember {
      id
      firstName
      lastName
      role
      company
      memberCategory
      shortDesc
      longDesc
      imgUrl
      logos
      isBoard
    }
    nextMember {
      id
      firstName
      lastName
    }
    previousMember {
      id
      firstName
      lastName
    }
  }
}
    `;

/**
 * __useGetMembersQuery__
 *
 * To run a query within a React component, call `useGetMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMembersQuery(baseOptions: Apollo.QueryHookOptions<GetMembersQuery, GetMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, options);
      }
export function useGetMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMembersQuery, GetMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, options);
        }
export type GetMembersQueryHookResult = ReturnType<typeof useGetMembersQuery>;
export type GetMembersLazyQueryHookResult = ReturnType<typeof useGetMembersLazyQuery>;
export type GetMembersQueryResult = Apollo.QueryResult<GetMembersQuery, GetMembersQueryVariables>;
export const GetAllPollsDocument = gql`
    query getAllPolls {
  getAllPolls {
    id
    name
    imgSrc
    desc
    slug
  }
}
    `;

/**
 * __useGetAllPollsQuery__
 *
 * To run a query within a React component, call `useGetAllPollsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPollsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPollsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPollsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPollsQuery, GetAllPollsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPollsQuery, GetAllPollsQueryVariables>(GetAllPollsDocument, options);
      }
export function useGetAllPollsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPollsQuery, GetAllPollsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPollsQuery, GetAllPollsQueryVariables>(GetAllPollsDocument, options);
        }
export type GetAllPollsQueryHookResult = ReturnType<typeof useGetAllPollsQuery>;
export type GetAllPollsLazyQueryHookResult = ReturnType<typeof useGetAllPollsLazyQuery>;
export type GetAllPollsQueryResult = Apollo.QueryResult<GetAllPollsQuery, GetAllPollsQueryVariables>;
export const GetPollDocument = gql`
    query getPoll($slug: String!) {
  getPoll(slug: $slug) {
    id
    name
    slug
    isPublished
    desc
    color
    progressColor
    imgSrc
    questions {
      id
      questionName
      typeAnswer
      isRequired
      answers {
        createdAt
        id
        name
        value
      }
    }
  }
}
    `;

/**
 * __useGetPollQuery__
 *
 * To run a query within a React component, call `useGetPollQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPollQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPollQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPollQuery(baseOptions: Apollo.QueryHookOptions<GetPollQuery, GetPollQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPollQuery, GetPollQueryVariables>(GetPollDocument, options);
      }
export function useGetPollLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPollQuery, GetPollQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPollQuery, GetPollQueryVariables>(GetPollDocument, options);
        }
export type GetPollQueryHookResult = ReturnType<typeof useGetPollQuery>;
export type GetPollLazyQueryHookResult = ReturnType<typeof useGetPollLazyQuery>;
export type GetPollQueryResult = Apollo.QueryResult<GetPollQuery, GetPollQueryVariables>;
export const CompleteVoteDocument = gql`
    mutation CompleteVote($slug: String!) {
  completeVote(slug: $slug)
}
    `;
export type CompleteVoteMutationFn = Apollo.MutationFunction<CompleteVoteMutation, CompleteVoteMutationVariables>;

/**
 * __useCompleteVoteMutation__
 *
 * To run a mutation, you first call `useCompleteVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeVoteMutation, { data, loading, error }] = useCompleteVoteMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCompleteVoteMutation(baseOptions?: Apollo.MutationHookOptions<CompleteVoteMutation, CompleteVoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteVoteMutation, CompleteVoteMutationVariables>(CompleteVoteDocument, options);
      }
export type CompleteVoteMutationHookResult = ReturnType<typeof useCompleteVoteMutation>;
export type CompleteVoteMutationResult = Apollo.MutationResult<CompleteVoteMutation>;
export type CompleteVoteMutationOptions = Apollo.BaseMutationOptions<CompleteVoteMutation, CompleteVoteMutationVariables>;
export const AuthVoterDocument = gql`
    mutation authVoter($email: String!, $firstName: String!, $lastName: String!, $pollSlug: String!) {
  authVoter(
    email: $email
    firstName: $firstName
    lastName: $lastName
    pollSlug: $pollSlug
  )
}
    `;
export type AuthVoterMutationFn = Apollo.MutationFunction<AuthVoterMutation, AuthVoterMutationVariables>;

/**
 * __useAuthVoterMutation__
 *
 * To run a mutation, you first call `useAuthVoterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthVoterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authVoterMutation, { data, loading, error }] = useAuthVoterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      pollSlug: // value for 'pollSlug'
 *   },
 * });
 */
export function useAuthVoterMutation(baseOptions?: Apollo.MutationHookOptions<AuthVoterMutation, AuthVoterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthVoterMutation, AuthVoterMutationVariables>(AuthVoterDocument, options);
      }
export type AuthVoterMutationHookResult = ReturnType<typeof useAuthVoterMutation>;
export type AuthVoterMutationResult = Apollo.MutationResult<AuthVoterMutation>;
export type AuthVoterMutationOptions = Apollo.BaseMutationOptions<AuthVoterMutation, AuthVoterMutationVariables>;
export const SubscribeEmailDocument = gql`
    mutation subscribeEmail($email: String!) {
  subscribeEmail(email: $email)
}
    `;
export type SubscribeEmailMutationFn = Apollo.MutationFunction<SubscribeEmailMutation, SubscribeEmailMutationVariables>;

/**
 * __useSubscribeEmailMutation__
 *
 * To run a mutation, you first call `useSubscribeEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeEmailMutation, { data, loading, error }] = useSubscribeEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSubscribeEmailMutation(baseOptions?: Apollo.MutationHookOptions<SubscribeEmailMutation, SubscribeEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubscribeEmailMutation, SubscribeEmailMutationVariables>(SubscribeEmailDocument, options);
      }
export type SubscribeEmailMutationHookResult = ReturnType<typeof useSubscribeEmailMutation>;
export type SubscribeEmailMutationResult = Apollo.MutationResult<SubscribeEmailMutation>;
export type SubscribeEmailMutationOptions = Apollo.BaseMutationOptions<SubscribeEmailMutation, SubscribeEmailMutationVariables>;
export const GetAllVotesDocument = gql`
    query getAllVotes($pollSlug: String!) {
  getAllVotes(pollSlug: $pollSlug)
}
    `;

/**
 * __useGetAllVotesQuery__
 *
 * To run a query within a React component, call `useGetAllVotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllVotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllVotesQuery({
 *   variables: {
 *      pollSlug: // value for 'pollSlug'
 *   },
 * });
 */
export function useGetAllVotesQuery(baseOptions: Apollo.QueryHookOptions<GetAllVotesQuery, GetAllVotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVotesQuery, GetAllVotesQueryVariables>(GetAllVotesDocument, options);
      }
export function useGetAllVotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVotesQuery, GetAllVotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVotesQuery, GetAllVotesQueryVariables>(GetAllVotesDocument, options);
        }
export type GetAllVotesQueryHookResult = ReturnType<typeof useGetAllVotesQuery>;
export type GetAllVotesLazyQueryHookResult = ReturnType<typeof useGetAllVotesLazyQuery>;
export type GetAllVotesQueryResult = Apollo.QueryResult<GetAllVotesQuery, GetAllVotesQueryVariables>;
export const GetVotesDocument = gql`
    query getVotes($pollSlug: String!) {
  getVotes(pollSlug: $pollSlug) {
    answerValue
    answerId
  }
}
    `;

/**
 * __useGetVotesQuery__
 *
 * To run a query within a React component, call `useGetVotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVotesQuery({
 *   variables: {
 *      pollSlug: // value for 'pollSlug'
 *   },
 * });
 */
export function useGetVotesQuery(baseOptions: Apollo.QueryHookOptions<GetVotesQuery, GetVotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVotesQuery, GetVotesQueryVariables>(GetVotesDocument, options);
      }
export function useGetVotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVotesQuery, GetVotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVotesQuery, GetVotesQueryVariables>(GetVotesDocument, options);
        }
export type GetVotesQueryHookResult = ReturnType<typeof useGetVotesQuery>;
export type GetVotesLazyQueryHookResult = ReturnType<typeof useGetVotesLazyQuery>;
export type GetVotesQueryResult = Apollo.QueryResult<GetVotesQuery, GetVotesQueryVariables>;
export const MeVoterDocument = gql`
    query MeVoter {
  meVoter {
    id
    email
  }
}
    `;

/**
 * __useMeVoterQuery__
 *
 * To run a query within a React component, call `useMeVoterQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeVoterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeVoterQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeVoterQuery(baseOptions?: Apollo.QueryHookOptions<MeVoterQuery, MeVoterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeVoterQuery, MeVoterQueryVariables>(MeVoterDocument, options);
      }
export function useMeVoterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeVoterQuery, MeVoterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeVoterQuery, MeVoterQueryVariables>(MeVoterDocument, options);
        }
export type MeVoterQueryHookResult = ReturnType<typeof useMeVoterQuery>;
export type MeVoterLazyQueryHookResult = ReturnType<typeof useMeVoterLazyQuery>;
export type MeVoterQueryResult = Apollo.QueryResult<MeVoterQuery, MeVoterQueryVariables>;