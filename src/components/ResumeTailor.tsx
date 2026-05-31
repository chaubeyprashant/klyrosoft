import React from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Copy, Download, RefreshCw, Trash2, FileCode2, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import { useResumeTailor } from '@/hooks/useResumeTailor';
import { useToast } from "@/components/ui/use-toast";

const ResumeTailor = () => {
  const {
    latexCode,
    setLatexCode,
    jobDescription,
    setJobDescription,
    optimizedLatex,
    isProcessing,
    error,
    optimizeResume,
    clearData,
    replaceOriginal
  } = useResumeTailor();
  const { toast } = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "LaTeX code copied to clipboard.",
    });
  };

  const handleDownload = (text: string) => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "optimized-resume.tex";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-primary mb-4">
          AI Resume Tailor
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Paste your LaTeX resume once. We'll automatically tailor it to highlight your best matching skills for any job description.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: LaTeX Input */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FileCode2 className="text-primary w-5 h-5" />
              Your LaTeX Resume
            </h3>
            {latexCode && (
              <span className="text-xs text-green-500 flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded-full">
                <CheckCircle2 className="w-3 h-3" /> Auto-saved
              </span>
            )}
          </div>
          
          <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
             <Textarea
              value={latexCode}
              onChange={(e) => setLatexCode(e.target.value)}
              placeholder="% Paste your full LaTeX resume code here...&#10;\\documentclass[11pt,a4paper,sans]{moderncv}&#10;..."
              className="min-h-[500px] lg:min-h-[600px] font-mono text-sm border-0 focus-visible:ring-0 bg-transparent resize-y p-4"
              spellCheck={false}
            />
          </div>
          <div className="flex justify-end gap-2">
              <Button variant="ghost" size="sm" onClick={clearData} className="text-muted-foreground hover:text-destructive">
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
          </div>
        </div>

        {/* Right Column: JD Input & Results */}
        <div className="space-y-6 flex flex-col">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              Job Description
            </h3>
            <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
               <Textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the target job description here..."
                className="min-h-[200px] border-0 focus-visible:ring-0 bg-transparent resize-y p-4"
              />
            </div>
            
            {error && (
               <div className="flex items-center gap-2 text-destructive text-sm p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                 <AlertCircle className="w-4 h-4" />
                 {error}
               </div>
            )}

            <Button 
                onClick={optimizeResume} 
                disabled={isProcessing || !latexCode || !jobDescription}
                className="w-full h-12 bg-gradient-primary hover:shadow-elegant transition-all duration-300 text-lg font-medium"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Tailoring Resume...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Optimize Resume
                </>
              )}
            </Button>
          </div>

          {/* Results Area */}
          {optimizedLatex && (
             <div className="flex-1 min-h-[300px] flex flex-col border border-border rounded-xl bg-card/40 backdrop-blur-sm overflow-hidden mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="border-b border-border bg-muted/30 px-4 py-3 flex items-center justify-between">
                  <h4 className="font-medium text-primary flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> Optimized Output
                  </h4>
                  <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleCopy(optimizedLatex)} title="Copy Code">
                          <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDownload(optimizedLatex)} title="Download .tex">
                          <Download className="w-4 h-4" />
                      </Button>
                  </div>
               </div>
               <div className="flex-1 relative overflow-auto p-4">
                  <pre className="font-mono text-xs text-muted-foreground whitespace-pre-wrap">
                      {optimizedLatex}
                  </pre>
               </div>
               <div className="border-t border-border bg-muted/10 p-3">
                   <Button variant="secondary" className="w-full" onClick={replaceOriginal}>
                       <ArrowRight className="w-4 h-4 mr-2" /> Use this as new Base Resume
                   </Button>
               </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeTailor;
