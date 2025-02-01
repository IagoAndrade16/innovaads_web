import dayjs from "dayjs";

export class MomentUtils {
  public static formattedDate(data: Date, format: string): string {
    return dayjs().format(format);
  }
}