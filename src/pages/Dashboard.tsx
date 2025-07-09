
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Target, Droplets, Moon, Dumbbell, Apple } from 'lucide-react';

const Dashboard = () => {
  const [userPoints, setUserPoints] = useState(2350);
  const [dailyProgress, setDailyProgress] = useState({
    water: 6,
    sleep: 7.5,
    workout: 1,
    meals: 4
  });

  const dailyGoals = {
    water: 8,
    sleep: 8,
    workout: 1,
    meals: 5
  };

  const challenges = [
    { id: 1, title: 'Beber 2L de água', points: 50, completed: true, category: 'hydration' },
    { id: 2, title: 'Dormir 8 horas', points: 100, completed: false, category: 'sleep' },
    { id: 3, title: 'Treino completo', points: 150, completed: true, category: 'exercise' },
    { id: 4, title: 'Seguir plano alimentar', points: 120, completed: false, category: 'nutrition' }
  ];

  const getProgressPercentage = (current: number, goal: number) => {
    return Math.min((current / goal) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-amber-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header with user stats */}
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold text-neutral-950 mb-2">
            Desafio 7 Dias
          </h1>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-amber-400 text-neutral-950">
              <Trophy className="w-4 h-4 mr-2" />
              {userPoints} pontos
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">
              Dia 3 de 7
            </Badge>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-neutral-600 flex items-center">
                <Droplets className="w-4 h-4 mr-2 text-blue-500" />
                Hidratação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-950">
                {dailyProgress.water}/{dailyGoals.water}
              </div>
              <Progress 
                value={getProgressPercentage(dailyProgress.water, dailyGoals.water)} 
                className="mt-2"
              />
              <p className="text-xs text-neutral-500 mt-1">copos de água</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-neutral-600 flex items-center">
                <Moon className="w-4 h-4 mr-2 text-purple-500" />
                Sono
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-950">
                {dailyProgress.sleep}h
              </div>
              <Progress 
                value={getProgressPercentage(dailyProgress.sleep, dailyGoals.sleep)} 
                className="mt-2"
              />
              <p className="text-xs text-neutral-500 mt-1">horas de sono</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-neutral-600 flex items-center">
                <Dumbbell className="w-4 h-4 mr-2 text-red-500" />
                Exercício
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-950">
                {dailyProgress.workout}/{dailyGoals.workout}
              </div>
              <Progress 
                value={getProgressPercentage(dailyProgress.workout, dailyGoals.workout)} 
                className="mt-2"
              />
              <p className="text-xs text-neutral-500 mt-1">treino completo</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-neutral-600 flex items-center">
                <Apple className="w-4 h-4 mr-2 text-green-500" />
                Alimentação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-950">
                {dailyProgress.meals}/{dailyGoals.meals}
              </div>
              <Progress 
                value={getProgressPercentage(dailyProgress.meals, dailyGoals.meals)} 
                className="mt-2"
              />
              <p className="text-xs text-neutral-500 mt-1">refeições</p>
            </CardContent>
          </Card>
        </div>

        {/* Daily Challenges */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-neutral-950 flex items-center">
              <Target className="w-5 h-5 mr-2 text-amber-500" />
              Desafios de Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div 
                  key={challenge.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 ${
                    challenge.completed 
                      ? 'bg-amber-50 border-amber-200' 
                      : 'bg-white border-neutral-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      challenge.completed 
                        ? 'bg-amber-400 border-amber-400' 
                        : 'border-neutral-300'
                    }`}>
                      {challenge.completed && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <span className={`font-medium ${
                      challenge.completed ? 'text-neutral-600 line-through' : 'text-neutral-950'
                    }`}>
                      {challenge.title}
                    </span>
                  </div>
                  <Badge 
                    variant={challenge.completed ? "secondary" : "outline"}
                    className={challenge.completed ? "bg-amber-100 text-amber-800" : ""}
                  >
                    +{challenge.points} pts
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
