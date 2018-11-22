import { feedbackUrl, postFeedback } from "../feedback.service";

global.fetch = jest.fn().mockResolvedValue();

const data = { foo: "bar" };

describe("feedback service", () => {
  it("should make a request", () => {
    postFeedback(data);
    expect(fetch).toBeCalledTimes(1);
    expect(fetch.mock.calls[0][0]).toBe(feedbackUrl);
    expect(fetch.mock.calls[0][1].body).toBe(JSON.stringify(data));
  });
});
