import moment from "moment";

export class MomentUtils {
  public static formattedDate(date: Date | null, format: string): string {
    return MomentUtils.toBrazilianTimezone(date).format(format);
  }

  static toBrazilianTimezone(value: Date | null) {
    return moment(value).add(3, 'hours'); 
  }

  static toDate(value?: string | null) {
    if(MomentUtils.isBraziliamFormat(value!)) {
      const [day, month, year] = value!.split('/');
      return moment(`${year}-${month}-${day}`).toDate();
    }

    return moment(value).toDate();
  }

  static isBraziliamFormat(value: string) {
    return moment(value, 'DD/MM/YYYY').isValid();
  }
}