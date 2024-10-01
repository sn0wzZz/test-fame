import {
  AuthVoterMutationVariables,
  useAuthVoterMutation,
  useGetPollQuery,
  useMeVoterQuery,
  SubscribeEmailMutationVariables,
  useSubscribeEmailMutation
} from "@/generated/apolloComponents";
import Loading from "@/partials/Loading";
import QuestionBuilder from "@/partials/QuetionBuilder/QuestionBuilder";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Questions: FC = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<AuthVoterMutationVariables>();
  const [subscribeEmail] = useSubscribeEmailMutation();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isErrorOnAuth, setIsErrorOnAuth] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string | undefined>();
  const [isDone, setIsDone] = useState<boolean>(false);
  const { pollSlug } = router.query;
  const [isSecond, setIsSecond] = useState(false);
  const { data: voterMe, refetch } = useMeVoterQuery();
  const [isAuthUser, setIsAuthUser] = useState<boolean>(false);
  const { data: pollData, loading } = useGetPollQuery({
    variables: { slug: String(pollSlug) },
    onError: () => {
      setIsDone(true);
    },
  });

  const onSubscribeSubmit = (data: SubscribeEmailMutationVariables) => {
    subscribeEmail({
      variables: {
        ...data,
      },
      onCompleted: () => {
        setIsError(false);
        setIsChecked(true);
      },
      onError: () => {
        setIsChecked(false);
        setIsError(true);
      },
    });
  };

  const handleSubscribe = () => {
    voterMe?.meVoter
      ? onSubscribeSubmit({ email: voterMe.meVoter.email })
      : setIsError(true);
  }
  const [authVoter] = useAuthVoterMutation();
  useEffect(() => {setIsAuthUser(false)}, []);
  useEffect(() => {}, [voterMe?.meVoter]);
  useEffect(() => setIsSecond((pollSlug === 'angel-investor-logic-2' || pollSlug === "join-f.a.m.e-as-an-angel-investor") ? true : false), [pollSlug])
  const onSubmitAuth = (data: AuthVoterMutationVariables) => {
    authVoter({
      variables: {
        ...data, pollSlug: String(pollSlug) || ''
      },
      onCompleted: () => {
        refetch();
        setIsAuthUser(true)
      },
      onError: (err) => {
        err.message === 'Survey already completed'
        ? ( setErrMessage('You have already completed this application. If you would like, you can still apply and join us as one of the other categories.'), setIsErrorOnAuth(true) )
        : ( setErrMessage('Sorry. Something went wrong. Please try again later'), setIsErrorOnAuth(true) )
      }
    });
  };
  if (loading) return <Loading />;
  if (isDone)
    return (
      <>
        <div
          className="overflow-hidden h-screen relative"
          style={{
            backgroundImage: "url(../../images/thank-you.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex mt-24 flex-col max-w-5xl mx-auto justify-center relative h-2/3">
            <div className="px-12 py-10">
              { pollSlug === 'growth-program'
                ? <h1 className="text-left text-2xl md:text-3xl font-bold text-brandOrange leading-none break-words max-w-2xl mb-2 uppercase">
                  Application for growth program was closed on 15 Feb 2024.
                  </h1>
                : <><h1 className="text-left text-3xl md:text-5xl font-bold text-brandOrange leading-none break-words max-w-2xl mb-2 uppercase">
                  Thank You!
                  </h1>
                  <p className="max-w-sm break-all mb-8 text-gray-700">
                    We will be reviewing your application and will be in touch with the next steps.
                  </p></>
              }
              {!isError && (
              <>
                <p className="max-w-sm text-black">
                  Just one more thing.
                </p>
                <p className="max-w-sm mb-5 text-black">
                  If you want to keep you posted on exciting developments and the latest news related to F.A.M.E, please subscribe by checking the box below.
                </p>
                <div className={`flex items-start mb-8 ${isChecked && 'opacity-50'}`}>
                  <div className="bg-white border border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mt-0 mr-2 focus-within:border-gray-500 cursor-pointer">
                    <input
                      type="checkbox"
                      name="subscribe"
                      checked={isChecked}
                      disabled={isChecked}
                      className="opacity-0 absolute cursor-pointer mt-0"
                      onChange={(e) => {
                        e.target.checked && handleSubscribe()
                      }}
                    />
                    <svg
                      className="fill-current text-white hidden w-6 h-6 p-1 pointer-events-none"
                      style={{ backgroundColor: '#ff7c5c' }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  </div>
                  <label className=" flex justify-start items-start md:mr-4 max-w-sm inline-block text-[rgba(255,124,92,1)] disabled:opacity-50"><strong>Subscribe</strong></label>
                </div>
              </>)}
              {isChecked && (<p className="max-w-sm mb-10 text-gray-700">
                 Great! Thank you, you will hear from us soon.
              </p>)}
              {isError && (<p className="max-w-sm mb-10 text-red-500">
                Oops! Something went wrong. You have already subscribed or we have some issue at the moment.
              </p>)}
              <Link href={"/"} legacyBehavior>
                <a className="px-4 py-1 border rounded-full border-brandOrange hover:bg-brandOrange hover:text-white transition duration-150 ease-in-out">
                  Go Home
                </a>
              </Link>
            </div>
          </div>
          <footer className="absolute bottom-0 w-full footerDots">
            <div className="px-4 py-8 sm:px-6 bg-black">
              <div className="text-sm text-white flex items-center space-x-4">
                <span className="font-bold">F.A.M.E.</span>
                <span className="font-light text-xs">All rights reserved.</span>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  return (
    <>
      {pollData && pollData.getPoll.questions && (
        <>
          <div className="h-screen relative overflow-auto md:overflow-x-auto">
            <div className="grid grid-cols-6 h-screen min-h-screen">
              <div
                className="col-span-6 md:h-full md:col-span-2 flex items-center justify-center"
                style={{ backgroundColor: pollData.getPoll.progressColor }}
                data-aos="zoom-y-out"
                data-aos-delay="290"
              >
                <img src={pollData.getPoll.imgSrc} className="h-48 md:h-auto" />
              </div>
              <div
                className="col-span-6 md:col-span-4 items-center"
                data-aos="zoom-y-out"
                data-aos-delay="290"
              >
                <>
                  <div className="flex mt-2 md:mt-12 flex-col my-2 max-w-5xl mx-auto relative">
                    <div className="py-4 px-6 md:px-12">
                      <h1 className="text-left text-3xl md:text-5xl font-bold leading-none break-words max-w-2xl mt-2">
                        {pollData.getPoll.name}
                      </h1>
                      <p className="max-w-2xl text-gray-700 mt-2 mb-2 break-words">
                        {pollData.getPoll.desc}
                      </p>
                    </div>
                  </div>
                </>
                <div className="bg-white flex mt-6 flex-col my-2 px-6 md:px-12 max-w-5xl mx-auto relative rounded ">
                  {isAuthUser ? (
                    <>
                      <QuestionBuilder
                        color={pollData.getPoll.color}
                        questions={pollData.getPoll.questions}
                        setIsDone={setIsDone}
                        pollSlug={pollData.getPoll.slug}
                        isSecond={isSecond}
                        setIsSecond={setIsSecond}
                      />
                    </>
                  ) : (
                    <>
                      <form
                        onSubmit={handleSubmit(onSubmitAuth)}
                        className={"my-8"}
                      >
                        <div className="mt-4">
                          <h3 className="text-left text-3xl font-bold flex mb-4">
                            Personal Data
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="-mx-3 mb-4 flex flex-wrap">
                              <div className="w-full px-3">
                                <label
                                  className="mb-1 block text-sm font-medium text-gray-800"
                                  htmlFor="firstName"
                                >
                                  First Name
                                </label>
                                <input
                                  id="firstName"
                                  {...register("firstName", { required: true })}
                                  type="text"
                                  className="form-input w-full text-gray-800"
                                  placeholder=""
                                  required
                                />
                              </div>
                            </div>
                            <div className="-mx-3 mb-4 flex flex-wrap">
                              <div className="w-full px-3">
                                <label
                                  className="mb-1 block text-sm font-medium text-gray-800"
                                  htmlFor="lastName"
                                >
                                  Last Name
                                </label>
                                <input
                                  id="lastName"
                                  {...register("lastName", { required: true })}
                                  type="text"
                                  className="form-input w-full text-gray-800"
                                  placeholder=""
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="-mx-3 mb-4 flex flex-wrap">
                            <div className="w-full px-3">
                              <div className="flex justify-between">
                                <label
                                  className="mb-1 block text-sm font-medium text-gray-800"
                                  htmlFor="email"
                                >
                                  Email
                                </label>
                              </div>
                              <input
                                id="email"
                                {...register("email", { required: true })}
                                type="email"
                                className="form-input w-full text-gray-800"
                                placeholder="****@**.com"
                                required
                              />
                            </div>
                          </div>
                          <div className="mt-3 text-center text-sm text-gray-500">
                            By continuing, you agree to our {" "}
                            <a className="underline" href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                              privacy policy
                            </a>
                            .
                          </div>
                        </div>
                        <div className="flex justify-end mt-4">
                          <button
                            type="submit"
                            className="px-4 mt-4 py-2 border rounded-full bg-brandOrange text-white hover:bg-white hover:border-brandOrange hover:text-brandOrange transition duration-150 ease-in-out"
                          >
                            Next
                          </button>
                        </div>
                        {isErrorOnAuth && 
                          <div className="text-black mt-3 text-center text-white text-sm">
                            {errMessage}
                        </div>
                        }
                      </form>
                    </>
                  )}
                </div>
                <footer className="absolute text-center bottom-0 w-full">
                  <span className="font-bold mr-2">F.A.M.E.</span>
                  <span className="font-light text-xs">
                    All rights reserved.
                  </span>
                </footer>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Questions;
