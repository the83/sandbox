require_relative "../lib/fizz_buzz"

describe FizzBuzz do
  it "prints 'fizz' if it's a multiple of 3" do
    result = FizzBuzz.run(3)
    expect(result).to eq([1, 2, "fizz"])
  end

  it "prints 'buzz' if it's a multiple of 5" do
    result = FizzBuzz.run(5)
    expect(result).to eq([1, 2, "fizz", 4, "buzz"])
  end

  it "prints 'fizzbuzz' if it's a multiple of 15" do
    result = FizzBuzz.run(15)
    expect(result).to eq([
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz"
    ])
  end
end
