import Appoitment from '../models/Appointment';

interface Request {
  date: Date;
  provider: string;
}

class CreateAppointmentService {
  public execute({ date, provider }: Request): Appoitment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = appointmentsRepository.findByDate(
      parsedDate,
    );

    if (findAppointmentInSameDate) {
      return response.status(400).json({ message: 'Horario Já Agendado' });
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
