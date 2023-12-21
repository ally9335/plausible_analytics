defmodule Plausible.Stats.Compare do
  def calculate_change(:bounce_rate, old_count, new_count) do
    if old_count > 0, do: new_count - old_count
  end

  def calculate_change(_metric, old_count, new_count) do
    percent_change(old_count, new_count)
  end

  def percent_change(nil, _new_count), do: nil

  def percent_change(%Money{} = old_count, %Money{} = new_count) do
    old_count = old_count |> Money.to_decimal() |> Decimal.to_float()
    new_count = new_count |> Money.to_decimal() |> Decimal.to_float()
    percent_change(old_count, new_count)
  end

  def percent_change(old_count, new_count) do
    cond do
      old_count == 0 and new_count > 0 ->
        100

      old_count == 0 and new_count == 0 ->
        0

      true ->
        round((new_count - old_count) / old_count * 100)
    end
  end
end
