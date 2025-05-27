import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Clock, Flame, Dumbbell, Play } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Workout } from "@shared/schema";

export function WorkoutLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");

  const { data: workouts = [], isLoading } = useQuery<Workout[]>({
    queryKey: ["/api/workouts"],
  });

  const filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch = workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workout.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workout.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLevel = selectedLevel === "all" || workout.difficulty === selectedLevel;
    
    const matchesDuration = selectedDuration === "all" || 
      (selectedDuration === "15-30" && workout.duration >= 15 && workout.duration <= 30) ||
      (selectedDuration === "30-45" && workout.duration >= 30 && workout.duration <= 45) ||
      (selectedDuration === "45+" && workout.duration >= 45);

    return matchesSearch && matchesLevel && matchesDuration;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-accent/10 text-accent";
      case "intermediate":
        return "bg-primary/10 text-primary";
      case "advanced":
        return "bg-secondary/10 text-secondary";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  if (isLoading) {
    return (
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Discover Your Perfect Workout</h2>
            <p className="text-xl text-muted-foreground">AI-curated exercises tailored to your goals and equipment</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="w-full h-48 bg-muted animate-pulse" />
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded animate-pulse mb-4" />
                  <div className="h-3 bg-muted rounded animate-pulse mb-2" />
                  <div className="h-3 bg-muted rounded animate-pulse w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Discover Your Perfect Workout</h2>
          <p className="text-xl text-muted-foreground">AI-curated exercises tailored to your goals and equipment</p>
        </div>

        {/* Search and Filter Bar */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search workouts, exercises, muscle groups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-3">
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Any Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Duration</SelectItem>
                  <SelectItem value="15-30">15-30 min</SelectItem>
                  <SelectItem value="30-45">30-45 min</SelectItem>
                  <SelectItem value="45+">45+ min</SelectItem>
                </SelectContent>
              </Select>
              <Button className="gradient-bg">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </Card>

        {/* Workout Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkouts.map((workout) => (
            <Card key={workout.id} className="overflow-hidden card-hover">
              <img
                src={workout.imageUrl || "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"}
                alt={workout.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{workout.name}</h3>
                  <Badge className={getDifficultyColor(workout.difficulty)}>
                    {capitalizeFirst(workout.difficulty)}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {workout.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {workout.duration} min
                    </span>
                    <span className="flex items-center">
                      <Flame className="w-4 h-4 mr-1" />
                      {workout.calories} cal
                    </span>
                    <span className="flex items-center">
                      <Dumbbell className="w-4 h-4 mr-1" />
                      {workout.equipment?.length ? "Equipment" : "Bodyweight"}
                    </span>
                  </div>
                </div>
                <Button className="w-full gradient-bg">
                  <Play className="w-4 h-4 mr-2" />
                  Start Workout
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredWorkouts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No workouts found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedLevel("all");
                setSelectedDuration("all");
              }}
              variant="outline"
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* View All Button */}
        {filteredWorkouts.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" className="btn-secondary">
              View All Workouts
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
