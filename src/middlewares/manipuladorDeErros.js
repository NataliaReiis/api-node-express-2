import mongoose from "mongoose";

function manipuladorDeErros(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    res
      .status(400)
      .send({ message: "Um ou mais dados fornecidos estão incorretos!" });
  } else if (error instanceof mongoose.Error.ValidationError) {
    const mensagensError = Object.values(error.errors)
      .map((error) => error.message)
      .join("; ");

    res
      .status(400)
      .send({
        message: `Os seguintes erros foram encontrados:  ${mensagensError}`,
      });
  } else {
    res
      .status(500)
      .send({ message: `${error.message} - Erro interno no servidor` });
  }
}

export default manipuladorDeErros;
