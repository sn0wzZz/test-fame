import React, { Dispatch, FC, useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import {
  useCompleteVoteMutation,
  useGetAllVotesQuery,
  useGetVotesQuery,
  useRemoveAnswerMutation,
  useSendAnswerMutation,
  useSignRequestLazyQuery,
} from "../../generated/apolloComponents";
import { Questions } from "../../../utils/types";
import Loading from "../Loading";
import InnerLoading from "../InnerLoading";
import { useRouter } from "next/router";
type QuestionBuilderProps = {
  questions: Questions | null | undefined;
  pollSlug: string;
  color: string;
  setIsDone: Dispatch<React.SetStateAction<boolean>>;
  setIsSecond: Dispatch<React.SetStateAction<boolean>>;
  isSecond: boolean;
};

const QuestionBuilder: FC<QuestionBuilderProps> = ({
  questions,
  color,
  pollSlug,
  setIsDone,
  setIsSecond,
  isSecond
}: QuestionBuilderProps) => {
  const { register, handleSubmit } = useForm();
  const [sendAnswerMutation] = useSendAnswerMutation();
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [fileUploadLoading, setFileUploadLoading] = useState<boolean>(false);
  const router = useRouter();
  const [files, setFiles] = useState<Array<string>>([]);
  const [fileAnswer, setFileAnswer] = useState<string>("");
  const [signRequest] = useSignRequestLazyQuery();
  const [completePoll] = useCompleteVoteMutation();
  const {
    data: votesData,
    refetch,
    loading: votesLoading,
  } = useGetAllVotesQuery({
    variables: { pollSlug },
  });
  const { data: votesValues, loading } = useGetVotesQuery({
    variables: { pollSlug },
  });
  const [removeAnswerMutation] = useRemoveAnswerMutation({
    onCompleted: () => refetch(),
  });

  const endPoll = async () => {
    await completePoll({ variables: { slug: pollSlug } });
    setIsDone(true);
  };

  const sendAnswer = async (
    value: string,
    answerId: string,
    typeOfAnswer: string
  ) => {
    await sendAnswerMutation({
      variables: {
        data: {
          value,
          answerId,
          typeOfAnswer,
        },
      },
    });
    refetch();
  };

  const angelSencondaryLogic = (answerId: string) => {
    if (answerId === "849fc9064e") {
      setCurrentQuestion(1);
      router.push("/poll/join-f.a.m.e-as-an-angel-investor");
      setIsSecond(true)
    }
    if (
      answerId === "0d7882459b" ||
      answerId === "e163f486aa" ||
      answerId === "5427edf95c"
    ) {
      setCurrentQuestion(1);
      router.push("/poll/angel-investor-logic-2");
      setIsSecond(true)
    }
  }

  const { getRootProps, getInputProps, acceptedFiles, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
  });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setFileUploadLoading(true);
      signRequest({
        onCompleted: async (signRequestData) => {
          const formData = new FormData();
          acceptedFiles.forEach(async (file) => {
            formData.append("file", file);
            await fetch(
              `https://api.cloudinary.com/v1_1/dpm9qj26o/image/upload/?api_key=339627851882791&timestamp=${signRequestData?.signRequest.timestamp}&signature=${signRequestData?.signRequest.signature}`,
              {
                method: "POST",
                body: formData,
              }
            )
              .then((response) => response.json())
              .then((data) => {
                setFiles((current) => [...current, data.secure_url]);
                setFileUploadLoading(false);
                sendAnswerMutation({
                  variables: {
                    data: {
                      value: data.secure_url,
                      answerId: fileAnswer,
                      typeOfAnswer: "file",
                    },
                  },
                  onCompleted: () => {
                    refetch();
                  },
                });
              });
          });
        },
      });
    }
  }, [acceptedFiles]);

  if (loading) return <Loading />;
  if (questions === undefined) {
    return <div>{""}</div>;
  }
  return (
    questions && (
      <>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="h-2.5 rounded-full"
            data-aos="zoom-y-out"
            data-aos-delay="300"
            style={{
              width: (pollSlug === 'join-f.a.m.e-as-an-angel')
                ? `${(currentQuestion / 10) * 100}%`
                : (pollSlug !== 'join-f.a.m.e-as-an-angel' && isSecond)
                  ? `${((currentQuestion + 4) / 10) * 100}%`
                  : `${(currentQuestion / questions.length) * 100}%`,
              backgroundColor: color,
            }}
          ></div>
        </div>
        <p className="text-center mt-2 text-gray-500">
          {(pollSlug === 'join-f.a.m.e-as-an-angel')
            ? (`${currentQuestion}/10`)
            : (pollSlug !== 'join-f.a.m.e-as-an-angel' && isSecond)
              ? (`${currentQuestion + 4}/10`)
              : (`${currentQuestion}/${questions.length}`)}
        </p>
        <form onSubmit={handleSubmit(endPoll)} className={"mb-8"}>
          {questions &&
            questions.map((q, index) => {
              return (
                <>
                  <div
                    className={`${currentQuestion === index + 1 ? "block" : "hidden"
                      } bg-white flex mt-6 flex-col my-2 max-w-5xl mx-auto relative rounded`}
                    key={q.id}
                  >
                    <div className="mt-3 mb-3">
                      <h4 className="text-left text-2xl md:text-3xl font-bold flex">
                        {q.isRequired && (
                          <span className="text-red-400 ml-2 text-base pr-2">
                            *
                          </span>
                        )}
                        {q.questionName}
                      </h4>
                      <div className="mt-3 mx-4">
                        {q.typeAnswer === "radioBox" &&
                          q.answers &&
                          q.answers.map((ans) => (
                            <label
                              className="flex justify-start items-start mt-4 mb-1"
                              key={ans.id}
                            >
                              <div className="bg-white border border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 cursor-pointer rounded-full">
                                <input
                                  type="radio"
                                  checked={votesData?.getAllVotes.includes(
                                    ans.id
                                  )}
                                  value={ans.value}
                                  {...register(q.id, {
                                    required: q.isRequired,
                                  })}
                                  onChange={(e) =>
                                    sendAnswer(
                                      e.target.value,
                                      ans.id,
                                      q.typeAnswer
                                    )
                                  }
                                  className="opacity-0 absolute cursor-pointer"
                                />
                                <svg
                                  className="fill-current text-white hidden w-6 h-6 p-1 rounded-full pointer-events-none"
                                  style={{ backgroundColor: color }}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                </svg>
                              </div>
                              <div className="select-none">{ans.name}</div>
                            </label>
                          ))}
                        {q.typeAnswer === "textInput" &&
                          q.answers &&
                          q.answers.map((ans) => {
                            return (
                              <div className="mb-4" key={ans.id}>
                                <DebounceInput
                                  minLength={2}
                                  {...register(q.id, {
                                    required: q.isRequired,
                                  })}
                                  placeholder="Type here..."
                                  value={votesValues?.getVotes
                                    .filter((v) => v.answerId === ans.id)
                                    .map((v) => {
                                      if (v.answerId === ans.id) {
                                        return String(v.answerValue);
                                      }
                                      return;
                                    })
                                    .toString()}
                                  className="form-input w-full overflow-hidden"
                                  debounceTimeout={500}
                                  maxLength={5000}
                                  element="textarea"
                                  onChange={(e) =>
                                    sendAnswer(
                                      e.target.value,
                                      ans.id,
                                      q.typeAnswer
                                    )
                                  }
                                />
                              </div>
                            );
                          })}
                        {q.typeAnswer === "checkBox" && q.answers && (
                          <>
                            <div className={`flex  grid grid-cols-1  ${q.id === 'cea116c2e8' ? "md:grid-cols-2 " : "md:grid-cols-1 "}`} >
                              {q.answers.map((ans) => (
                                <div>
                                  <label
                                    className="flex justify-start items-start mt-4 md:mr-4"
                                    key={ans.id}
                                  >
                                    <div className="bg-white border border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 cursor-pointer">
                                      <input
                                        type="checkbox"
                                        name={ans.id}
                                        checked={votesData?.getAllVotes.includes(
                                          ans.id
                                        )}
                                        className="opacity-0 absolute cursor-pointer"
                                        onChange={(e) => {
                                          if (e.target.checked === true) {
                                            sendAnswer(
                                              ans.value,
                                              ans.id,
                                              q.typeAnswer
                                            );
                                          } else {
                                            removeAnswerMutation({
                                              variables: {
                                                data: {
                                                  answerId: ans.id,
                                                  typeOfAnswer: q.typeAnswer,
                                                },
                                              },
                                            });
                                          }
                                        }}
                                      />
                                      <svg
                                        className="fill-current text-white hidden w-6 h-6 p-1 pointer-events-none"
                                        style={{ backgroundColor: color }}
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                      </svg>
                                    </div>
                                    <div className="select-none">{ans.name}</div>
                                  </label>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        {q.typeAnswer === "file" &&
                          q.answers &&
                          q.answers.map((ans) => (
                            <>
                              <div
                                className="flex w-full flex-col items-center justify-center"
                                {...getRootProps()}
                                onClick={() => {
                                  setFileAnswer(ans.id);
                                  open();
                                }}
                              >
                                <input {...getInputProps()} id={ans.id} />
                                <label className="flex h-auto w-full flex-col rounded border-2 border-dashed border-blue-200 transition duration-150 ease-in-out hover:border-gray-300 hover:bg-gray-100">
                                  {fileUploadLoading ? (
                                    <div className="my-7">
                                      <InnerLoading />
                                    </div>
                                  ) : (
                                    <>
                                      <div className="my-6 flex flex-col items-center justify-center">
                                        <div className="flex flex-row justify-start space-x-4">
                                          {files.map((image, index) => (
                                            <div
                                              className="relative mb-7"
                                              key={index}
                                            >
                                              <img
                                                src={
                                                  "https://res.cloudinary.com/dpm9qj26o/image/upload/v1670195347/file_fgzm9e.png"
                                                }
                                                alt="1"
                                                className="h-16 w-auto object-contain rounded-full"
                                              />
                                              <div
                                                className="absolute -top-1 -right-1 cursor-pointer rounded-full bg-red-500"
                                                onClick={() => {
                                                  setFiles((current) =>
                                                    current.filter(
                                                      (i) => i !== image
                                                    )
                                                  );
                                                  removeAnswerMutation({
                                                    variables: {
                                                      data: {
                                                        answerId: ans.id,
                                                        typeOfAnswer: "file",
                                                      },
                                                    },
                                                  });
                                                }}
                                              >
                                                <span className="flex h-4 w-4 items-center justify-center text-xxs text-white">
                                                  <svg
                                                    width="9"
                                                    height="9"
                                                    viewBox="0 0 9 9"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      d="M8 8L1 1M8 1L1 8"
                                                      stroke="currentColor"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                    />
                                                  </svg>
                                                </span>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                        <svg
                                          width="41"
                                          height="34"
                                          viewBox="0 0 41 34"
                                          className="stroke-gray-400"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M25.7241 25.7241H31.6551C35.9472 25.7241 39.459 23.4445 39.459 19.1999C39.459 14.9554 35.3229 12.842 31.9672 12.6758C31.2735 6.03777 26.4264 2 20.7295 2C15.3448 2 11.8767 5.57344 10.7404 9.11722C6.05806 9.56204 2 12.5416 2 17.4206C2 22.2997 6.21414 25.7241 11.3648 25.7241H15.735"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M20.7295 32.0002V13.2379M25.7241 16.9838L20.7295 11.9893L15.735 16.9838H25.7241Z"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>

                                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                          Attach files
                                        </p>
                                      </div>
                                    </>
                                  )}
                                </label>
                              </div>
                            </>
                          ))}
                      </div>
                    </div>
                    <div
                      className={`flex justify-${(currentQuestion > 1 || isSecond) ? "between" : "end"
                        } mt-4 space-x-4`}
                    >
                      {(currentQuestion > 1 || isSecond) && (
                        <button
                          className="px-4 mt-4 py-2 border rounded-full bg-brandOrange text-white hover:bg-white hover:border-brandOrange hover:text-brandOrange transition duration-150 ease-in-out"
                          onClick={() => {
                            if (isSecond && currentQuestion === 1) {
                              window.history.back();
                              setCurrentQuestion(4);
                            } else {
                              setCurrentQuestion((prev) => prev - 1);
                            }
                          }}
                        >
                          Previous Question
                        </button>
                      )}
                      <button
                        type="submit"
                        disabled={votesLoading}
                        className="px-4 mt-4 py-2 border rounded-full bg-brandOrange text-white hover:bg-white hover:border-brandOrange hover:text-brandOrange transition duration-150 ease-in-out"
                        onClick={() => {
                          if (q.isRequired) {
                            let result = q.answers.map((ans) =>
                              votesData?.getAllVotes.includes(ans.id)
                            );
                            if (result.includes(true)) {
                              if (pollSlug !== 'join-f.a.m.e-as-an-angel') {
                                currentQuestion === questions?.length ? (endPoll(), setIsDone(true)) : setCurrentQuestion((prev) => prev + 1)
                              } else {
                                if (currentQuestion === questions?.length) {
                                  q.answers.forEach(ans => {
                                    if (votesData?.getAllVotes.includes(ans.id)) {
                                      angelSencondaryLogic(ans.id)
                                    }
                                  })
                                } else {
                                  setCurrentQuestion((prev) => prev + 1);
                                }
                              }
                            }
                          } else {
                            if (pollSlug !== 'join-f.a.m.e-as-an-angel') {
                              currentQuestion === questions?.length ? (endPoll(), setIsDone(true)) : setCurrentQuestion((prev) => prev + 1)
                            } else {
                              if (currentQuestion === questions?.length) {
                                q.answers.forEach(ans => {
                                  if (votesData?.getAllVotes.includes(ans.id)) {
                                    angelSencondaryLogic(ans.id)
                                  }
                                })
                              } else {
                                setCurrentQuestion((prev) => prev + 1);
                              }
                            }
                          }
                        }}
                      >
                        {(currentQuestion === questions?.length && pollSlug !== 'join-f.a.m.e-as-an-angel')
                          ? "Submit"
                          : "Next Question"}
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
        </form>
      </>
    )
  );
};

export default QuestionBuilder;
