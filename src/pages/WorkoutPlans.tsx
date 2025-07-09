
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dumbbell, Clock, Target, Home, Calendar } from 'lucide-react';

const WorkoutPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState('3x');

  const workoutPlans = {
    '3x': {
      title: '3x por semana',
      description: 'Treino completo para iniciantes',
      duration: '60-90 min',
      days: [
        {
          day: 'Segunda-feira',
          focus: 'Corpo Todo A',
          exercises: [
            { name: 'Agachamento', sets: '3x12', rest: '60s' },
            { name: 'Supino reto', sets: '3x10', rest: '90s' },
            { name: 'Remada curvada', sets: '3x10', rest: '90s' },
            { name: 'Desenvolvimento militar', sets: '3x12', rest: '60s' },
            { name: 'Rosca direta', sets: '3x12', rest: '45s' },
            { name: 'Tríceps testa', sets: '3x12', rest: '45s' }
          ]
        },
        {
          day: 'Quarta-feira',
          focus: 'Corpo Todo B',
          exercises: [
            { name: 'Levantamento terra', sets: '3x8', rest: '120s' },
            { name: 'Supino inclinado', sets: '3x10', rest: '90s' },
            { name: 'Puxada alta', sets: '3x12', rest: '60s' },
            { name: 'Leg press', sets: '3x15', rest: '90s' },
            { name: 'Elevação lateral', sets: '3x15', rest: '45s' },
            { name: 'Panturrilha', sets: '4x15', rest: '30s' }
          ]
        },
        {
          day: 'Sexta-feira',
          focus: 'Corpo Todo C',
          exercises: [
            { name: 'Agachamento frontal', sets: '3x10', rest: '90s' },
            { name: 'Supino declinado', sets: '3x10', rest: '90s' },
            { name: 'Remada alta', sets: '3x12', rest: '60s' },
            { name: 'Afundo', sets: '3x12', rest: '60s' },
            { name: 'Rosca martelo', sets: '3x12', rest: '45s' },
            { name: 'Abdominal', sets: '3x20', rest: '30s' }
          ]
        }
      ]
    },
    '4x': {
      title: '4x por semana',
      description: 'Divisão superior/inferior',
      duration: '75-90 min',
      days: [
        {
          day: 'Segunda-feira',
          focus: 'Membros Superiores A',
          exercises: [
            { name: 'Supino reto', sets: '4x8-10', rest: '90s' },
            { name: 'Remada curvada', sets: '4x8-10', rest: '90s' },
            { name: 'Supino inclinado', sets: '3x10-12', rest: '75s' },
            { name: 'Puxada alta', sets: '3x10-12', rest: '75s' },
            { name: 'Desenvolvimento', sets: '3x12', rest: '60s' },
            { name: 'Rosca direta', sets: '3x12', rest: '45s' },
            { name: 'Tríceps pulley', sets: '3x12', rest: '45s' }
          ]
        },
        {
          day: 'Terça-feira',
          focus: 'Membros Inferiores A',
          exercises: [
            { name: 'Agachamento livre', sets: '4x8-10', rest: '120s' },
            { name: 'Levantamento terra', sets: '4x6-8', rest: '120s' },
            { name: 'Leg press', sets: '3x12-15', rest: '90s' },
            { name: 'Mesa flexora', sets: '3x12', rest: '60s' },
            { name: 'Panturrilha sentado', sets: '4x15', rest: '45s' },
            { name: 'Abdominal', sets: '3x20', rest: '30s' }
          ]
        },
        {
          day: 'Quinta-feira',
          focus: 'Membros Superiores B',
          exercises: [
            { name: 'Supino inclinado DB', sets: '4x10', rest: '90s' },
            { name: 'Remada unilateral', sets: '4x10', rest: '90s' },
            { name: 'Paralelas', sets: '3x12', rest: '75s' },
            { name: 'Remada alta', sets: '3x12', rest: '75s' },
            { name: 'Elevação lateral', sets: '3x15', rest: '45s' },
            { name: 'Rosca martelo', sets: '3x12', rest: '45s' },
            { name: 'Tríceps testa', sets: '3x12', rest: '45s' }
          ]
        },
        {
          day: 'Sexta-feira',
          focus: 'Membros Inferiores B',
          exercises: [
            { name: 'Agachamento hack', sets: '4x12', rest: '90s' },
            { name: 'Stiff', sets: '4x10', rest: '90s' },
            { name: 'Afundo', sets: '3x12', rest: '75s' },
            { name: 'Cadeira extensora', sets: '3x15', rest: '60s' },
            { name: 'Panturrilha em pé', sets: '4x20', rest: '45s' },
            { name: 'Prancha', sets: '3x60s', rest: '60s' }
          ]
        }
      ]
    },
    '5x': {
      title: '5x por semana',
      description: 'Divisão avançada por grupos musculares',
      duration: '60-75 min',
      days: [
        {
          day: 'Segunda-feira',
          focus: 'Peito e Tríceps',
          exercises: [
            { name: 'Supino reto', sets: '4x6-8', rest: '120s' },
            { name: 'Supino inclinado', sets: '4x8-10', rest: '90s' },
            { name: 'Supino declinado', sets: '3x10-12', rest: '75s' },
            { name: 'Paralelas', sets: '3x12', rest: '75s' },
            { name: 'Tríceps pulley', sets: '4x12', rest: '60s' },
            { name: 'Tríceps testa', sets: '3x12', rest: '45s' },
            { name: 'Tríceps coice', sets: '3x15', rest: '45s' }
          ]
        },
        {
          day: 'Terça-feira',
          focus: 'Costas e Bíceps',
          exercises: [
            { name: 'Barra fixa', sets: '4x8-10', rest: '120s' },
            { name: 'Remada curvada', sets: '4x8-10', rest: '90s' },
            { name: 'Puxada alta', sets: '4x10-12', rest: '75s' },
            { name: 'Remada unilateral', sets: '3x12', rest: '75s' },
            { name: 'Rosca direta', sets: '4x12', rest: '60s' },
            { name: 'Rosca martelo', sets: '3x12', rest: '45s' },
            { name: 'Rosca concentrada', sets: '3x15', rest: '45s' }
          ]
        },
        {
          day: 'Quarta-feira',
          focus: 'Pernas',
          exercises: [
            { name: 'Agachamento livre', sets: '5x8-10', rest: '120s' },
            { name: 'Leg press', sets: '4x12-15', rest: '90s' },
            { name: 'Cadeira extensora', sets: '4x15', rest: '60s' },
            { name: 'Mesa flexora', sets: '4x12', rest: '75s' },
            { name: 'Stiff', sets: '3x12', rest: '90s' },
            { name: 'Panturrilha em pé', sets: '5x15', rest: '45s' },
            { name: 'Panturrilha sentado', sets: '4x20', rest: '30s' }
          ]
        },
        {
          day: 'Quinta-feira',
          focus: 'Ombros',
          exercises: [
            { name: 'Desenvolvimento militar', sets: '4x8-10', rest: '90s' },
            { name: 'Desenvolvimento halteres', sets: '4x10-12', rest: '75s' },
            { name: 'Elevação lateral', sets: '4x12-15', rest: '60s' },
            { name: 'Elevação frontal', sets: '3x15', rest: '45s' },
            { name: 'Crucifixo inverso', sets: '4x15', rest: '60s' },
            { name: 'Encolhimento', sets: '4x15', rest: '60s' },
            { name: 'Abdução horizontal', sets: '3x20', rest: '30s' }
          ]
        },
        {
          day: 'Sexta-feira',
          focus: 'Braços e Core',
          exercises: [
            { name: 'Rosca direta barra', sets: '4x10', rest: '75s' },
            { name: 'Tríceps mergulho', sets: '4x10', rest: '75s' },
            { name: 'Rosca 21', sets: '3x21', rest: '60s' },
            { name: 'Tríceps francês', sets: '3x12', rest: '60s' },
            { name: 'Abdominal supra', sets: '4x20', rest: '45s' },
            { name: 'Prancha lateral', sets: '3x45s', rest: '60s' },
            { name: 'Mountain climber', sets: '3x30', rest: '45s' }
          ]
        }
      ]
    },
    '6x': {
      title: '6x por semana',
      description: 'Push/Pull/Legs duas vezes',
      duration: '60-90 min',
      days: [
        {
          day: 'Segunda-feira',
          focus: 'Push (Empurrar) A',
          exercises: [
            { name: 'Supino reto', sets: '5x5', rest: '3min' },
            { name: 'Desenvolvimento militar', sets: '4x8', rest: '2min' },
            { name: 'Supino inclinado DB', sets: '3x10', rest: '90s' },
            { name: 'Elevação lateral', sets: '4x12', rest: '60s' },
            { name: 'Paralelas', sets: '3x12', rest: '75s' },
            { name: 'Tríceps pulley', sets: '4x15', rest: '45s' }
          ]
        },
        {
          day: 'Terça-feira',
          focus: 'Pull (Puxar) A',
          exercises: [
            { name: 'Levantamento terra', sets: '5x5', rest: '3min' },
            { name: 'Barra fixa', sets: '4x8', rest: '2min' },
            { name: 'Remada curvada', sets: '4x10', rest: '90s' },
            { name: 'Puxada alta', sets: '3x12', rest: '75s' },
            { name: 'Rosca direta', sets: '4x12', rest: '60s' },
            { name: 'Rosca martelo', sets: '3x15', rest: '45s' }
          ]
        },
        {
          day: 'Quarta-feira',
          focus: 'Legs (Pernas) A',
          exercises: [
            { name: 'Agachamento', sets: '5x5', rest: '3min' },
            { name: 'Agachamento frontal', sets: '4x8', rest: '2min' },
            { name: 'Leg press', sets: '4x15', rest: '90s' },
            { name: 'Mesa flexora', sets: '4x12', rest: '75s' },
            { name: 'Panturrilha em pé', sets: '5x20', rest: '60s' },
            { name: 'Abdominal', sets: '4x25', rest: '30s' }
          ]
        },
        {
          day: 'Quinta-feira',
          focus: 'Push (Empurrar) B',
          exercises: [
            { name: 'Supino inclinado', sets: '4x6-8', rest: '2min' },
            { name: 'Desenvolvimento DB', sets: '4x10', rest: '90s' },
            { name: 'Supino declinado', sets: '3x12', rest: '75s' },
            { name: 'Elevação frontal', sets: '3x15', rest: '60s' },
            { name: 'Tríceps francês', sets: '4x12', rest: '60s' },
            { name: 'Tríceps coice', sets: '3x15', rest: '45s' }
          ]
        },
        {
          day: 'Sexta-feira',
          focus: 'Pull (Puxar) B',
          exercises: [
            { name: 'Remada T', sets: '4x8', rest: '2min' },
            { name: 'Puxada triângulo', sets: '4x10', rest: '90s' },
            { name: 'Remada unilateral', sets: '3x12', rest: '75s' },
            { name: 'Crucifixo inverso', sets: '3x15', rest: '60s' },
            { name: 'Rosca alternada', sets: '4x12', rest: '60s' },
            { name: 'Rosca concentrada', sets: '3x15', rest: '45s' }
          ]
        },
        {
          day: 'Sábado',
          focus: 'Legs (Pernas) B',
          exercises: [
            { name: 'Hack squat', sets: '4x10', rest: '2min' },
            { name: 'Stiff', sets: '4x12', rest: '90s' },
            { name: 'Afundo', sets: '3x12', rest: '75s' },
            { name: 'Cadeira extensora', sets: '4x15', rest: '60s' },
            { name: 'Panturrilha sentado', sets: '5x25', rest: '45s' },
            { name: 'Prancha', sets: '3x60s', rest: '60s' }
          ]
        }
      ]
    },
    'home': {
      title: 'Treinos em Casa',
      description: 'Exercícios sem equipamentos',
      duration: '30-45 min',
      days: [
        {
          day: 'Segunda-feira',
          focus: 'Corpo Todo A',
          exercises: [
            { name: 'Flexão de braço', sets: '3x15', rest: '45s' },
            { name: 'Agachamento', sets: '3x20', rest: '45s' },
            { name: 'Prancha', sets: '3x45s', rest: '60s' },
            { name: 'Burpee', sets: '3x10', rest: '90s' },
            { name: 'Mountain climber', sets: '3x30', rest: '45s' },
            { name: 'Polichinelo', sets: '3x50', rest: '30s' }
          ]
        },
        {
          day: 'Quarta-feira',
          focus: 'Corpo Todo B',
          exercises: [
            { name: 'Flexão diamante', sets: '3x12', rest: '60s' },
            { name: 'Agachamento jump', sets: '3x15', rest: '60s' },
            { name: 'Prancha lateral', sets: '3x30s', rest: '45s' },
            { name: 'Lunges', sets: '3x12', rest: '45s' },
            { name: 'Russian twist', sets: '3x30', rest: '30s' },
            { name: 'High knees', sets: '3x30', rest: '30s' }
          ]
        },
        {
          day: 'Sexta-feira',
          focus: 'Corpo Todo C',
          exercises: [
            { name: 'Flexão pike', sets: '3x10', rest: '60s' },
            { name: 'Agachamento sumô', sets: '3x20', rest: '45s' },
            { name: 'Prancha dinâmica', sets: '3x40s', rest: '60s' },
            { name: 'Glute bridge', sets: '3x20', rest: '45s' },
            { name: 'Dead bug', sets: '3x20', rest: '30s' },
            { name: 'Jumping jacks', sets: '3x60', rest: '30s' }
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-amber-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold text-neutral-950 mb-2">
            Planos de Treino
          </h1>
          <p className="text-neutral-600">
            Treinos personalizados para sua frequência e objetivos
          </p>
        </div>

        {/* Plan Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {Object.entries(workoutPlans).map(([key, plan]) => (
            <Button
              key={key}
              variant={selectedPlan === key ? "default" : "outline"}
              className={`p-4 h-auto flex-col space-y-2 ${
                selectedPlan === key 
                  ? 'bg-amber-400 hover:bg-amber-500 text-neutral-950' 
                  : 'hover:border-amber-300'
              }`}
              onClick={() => setSelectedPlan(key)}
            >
              {key === 'home' ? <Home className="w-5 h-5" /> : <Dumbbell className="w-5 h-5" />}
              <span className="text-sm font-medium text-center">
                {plan.title}
              </span>
            </Button>
          ))}
        </div>

        {/* Selected Workout Plan */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold">
                  {workoutPlans[selectedPlan as keyof typeof workoutPlans].title}
                </CardTitle>
                <p className="mt-1 opacity-90">
                  {workoutPlans[selectedPlan as keyof typeof workoutPlans].description}
                </p>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-neutral-950 text-lg px-4 py-2 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {workoutPlans[selectedPlan as keyof typeof workoutPlans].duration}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {workoutPlans[selectedPlan as keyof typeof workoutPlans].days.map((day, index) => (
                <Card key={index} className="border border-neutral-200 hover:border-amber-300 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-amber-500" />
                        <CardTitle className="text-lg">{day.day}</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-amber-700 border-amber-300">
                        <Target className="w-3 h-3 mr-1" />
                        {day.focus}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {day.exercises.map((exercise, exerciseIndex) => (
                        <div key={exerciseIndex} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                          <div>
                            <div className="font-medium text-neutral-950">{exercise.name}</div>
                            <div className="text-sm text-neutral-600">{exercise.sets}</div>
                          </div>
                          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                            {exercise.rest}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Tips */}
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-neutral-950 mb-2 flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Dicas para Maximizar os Resultados
              </h4>
              <ul className="text-sm text-neutral-700 space-y-1">
                <li>• Mantenha a técnica correta em todos os exercícios</li>
                <li>• Respeite os tempos de descanso entre as séries</li>
                <li>• Aumente a carga progressivamente a cada semana</li>
                <li>• Mantenha uma alimentação adequada para seus objetivos</li>
                <li>• Durma pelo menos 7-8 horas por noite para recuperação</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkoutPlans;
