class FizzBuzz
  FIZZ = "fizz"
  BUZZ = "buzz"
  FIZZBUZZ = "fizzbuzz"

  class << self
    def run(max)
      range = (1..max).to_a
      mapped_range = range.map do |num|
        if is_fizzbuzz?(num)
          FIZZBUZZ
        elsif is_buzz?(num)
          BUZZ
        elsif is_fizz?(num)
          FIZZ
        else
          num
        end
      end

      puts mapped_range
      mapped_range
    end

    private

    def is_fizzbuzz?(num)
      num % 15 == 0
    end

    def is_buzz?(num)
      num % 5 == 0
    end

    def is_fizz?(num)
      num % 3 == 0
    end
  end
end
