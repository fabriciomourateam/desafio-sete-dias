
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { User, Trophy, Target, Calendar, Edit3, Save } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Maria Silva',
    email: 'maria.silva@email.com',
    weight: '65',
    height: '165',
    age: '28',
    goal: 'Perda de peso',
    level: 'Intermediário'
  });

  const stats = {
    totalPoints: 3850,
    challengesCompleted: 42,
    streak: 5,
    rank: 4
  };

  const achievements = [
    { id: 1, title: 'Primeira Semana', description: 'Complete 7 dias seguidos', completed: true },
    { id: 2, title: 'Hidratação Master', description: 'Beba 2L de água por 5 dias', completed: true },
    { id: 3, title: 'Fitness Warrior', description: 'Complete 10 treinos', completed: false },
    { id: 4, title: 'Disciplina Total', description: 'Siga a dieta por 14 dias', completed: false }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Aqui você salvaria os dados
    console.log('Dados salvos:', userInfo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-amber-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold text-neutral-950 mb-2">
            Meu Perfil
          </h1>
          <p className="text-neutral-600">
            Acompanhe seu progresso e conquistas
          </p>
        </div>

        {/* Profile Card */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="w-20 h-20 border-4 border-white/30">
                  <AvatarFallback className="bg-white/20 text-neutral-950 text-2xl font-bold">
                    {userInfo.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl font-bold">{userInfo.name}</CardTitle>
                  <p className="opacity-90">{userInfo.email}</p>
                  <Badge variant="secondary" className="bg-white/20 text-neutral-950 mt-2">
                    #{stats.rank} no ranking
                  </Badge>
                </div>
              </div>
              <Button
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-neutral-950"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit3 className="w-4 h-4 mr-2" />}
                {isEditing ? 'Salvar' : 'Editar'}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {isEditing ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input 
                    id="name" 
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="weight">Peso (kg)</Label>
                  <Input 
                    id="weight" 
                    value={userInfo.weight}
                    onChange={(e) => setUserInfo({...userInfo, weight: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="height">Altura (cm)</Label>
                  <Input 
                    id="height" 
                    value={userInfo.height}
                    onChange={(e) => setUserInfo({...userInfo, height: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="age">Idade</Label>
                  <Input 
                    id="age" 
                    value={userInfo.age}
                    onChange={(e) => setUserInfo({...userInfo, age: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="goal">Objetivo</Label>
                  <Input 
                    id="goal" 
                    value={userInfo.goal}
                    onChange={(e) => setUserInfo({...userInfo, goal: e.target.value})}
                  />
                </div>
                <div className="md:col-span-2">
                  <Button onClick={handleSave} className="w-full bg-amber-400 hover:bg-amber-500 text-neutral-950">
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Alterações
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neutral-950">{userInfo.weight}kg</div>
                  <div className="text-sm text-neutral-600">Peso</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neutral-950">{userInfo.height}cm</div>
                  <div className="text-sm text-neutral-600">Altura</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neutral-950">{userInfo.age}</div>
                  <div className="text-sm text-neutral-600">Anos</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-neutral-950">{userInfo.level}</div>
                  <div className="text-sm text-neutral-600">Nível</div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur text-center">
            <CardContent className="p-4">
              <Trophy className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-950">{stats.totalPoints}</div>
              <div className="text-sm text-neutral-600">Pontos Totais</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur text-center">
            <CardContent className="p-4">
              <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-950">{stats.challengesCompleted}</div>
              <div className="text-sm text-neutral-600">Desafios</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur text-center">
            <CardContent className="p-4">
              <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-950">{stats.streak}</div>
              <div className="text-sm text-neutral-600">Dias Seguidos</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur text-center">
            <CardContent className="p-4">
              <User className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-950">#{stats.rank}</div>
              <div className="text-sm text-neutral-600">Posição</div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-neutral-950 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-amber-500" />
              Conquistas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 ${
                    achievement.completed 
                      ? 'bg-amber-50 border-amber-200' 
                      : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      achievement.completed 
                        ? 'bg-amber-400 border-amber-400 text-white' 
                        : 'border-neutral-300'
                    }`}>
                      {achievement.completed && '✓'}
                    </div>
                    <div>
                      <div className={`font-medium ${
                        achievement.completed ? 'text-neutral-950' : 'text-neutral-600'
                      }`}>
                        {achievement.title}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={achievement.completed ? "default" : "secondary"}
                    className={achievement.completed ? "bg-amber-400 text-neutral-950" : ""}
                  >
                    {achievement.completed ? 'Conquistada' : 'Em progresso'}
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

export default Profile;
