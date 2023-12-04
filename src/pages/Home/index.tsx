import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinuteseAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label>Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label>durante</label>
          <MinuteseAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={0}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton type="submit" disabled>
          Começar <Play size={24} />
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
