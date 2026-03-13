import PageLayout from "@/components/PageLayout";
import Chatbot from "@/components/Chatbot";

const ChatbotPage = () => {
  return (
    <PageLayout activeSection="chatbot">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-foreground mb-1">Admission Assistant</h2>
        <p className="text-sm text-muted-foreground mb-6">Get instant answers to your admission queries. Try clicking a suggested question or type your own.</p>
        <Chatbot />
      </div>
    </PageLayout>
  );
};

export default ChatbotPage;
