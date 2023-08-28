export class BaseResponseDto<T> {
  data?: T;
  status?: {
    code?: number;
    message?: string | Array<string>;
  };

  constructor(data?: T) {
    this.data = data;
  }
}

export class SuccessResponseDto<T> extends BaseResponseDto<T> {
  constructor(status?: number, data?: T) {
    super(data);
    this.status = {
      code: status ?? 200,
      message: 'success',
    };
  }
}

export class ErrorResponseDto<T> extends BaseResponseDto<T> {
  constructor(code?: number, message?: string) {
    super(null!);
    this.status = {
      code: code ?? 500,
      message: message ?? 'Internal Server Error',
    };
  }
}
