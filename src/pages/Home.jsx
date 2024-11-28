import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1 className="font-black text-5xl p-8">
        무료 성격 테스트
      </h1>
      <p className="text-lg">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <div className="flex justify-between gap-6 text-left p-8">
        <div className="p-4 bg-white rounded-lg flex-1 shadow-lg shadow-black-500/50">
          <h3 className="font-medium text-xl p-2">성격 유형 검사</h3>
          <p className="p-2">자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요</p>
        </div>
        <div className="p-4 bg-white rounded-lg flex-1 shadow-lg shadow-black-500/50">
          <h3 className="font-medium text-xl p-2">성격 유형 이해</h3>
          <p className="p-2">다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.</p>
        </div>
        <div className="p-4 bg-white rounded-lg flex-1 shadow-lg shadow-black-500/50">
          <h3 className="font-medium text-xl p-2">팀 평가</h3>
          <p className="p-2">팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to={user ? "/test" : "/login"} className="rounded-full bg-red-600 text-white p-4">
          내 성격 알아보러 가기
        </Link>
      </div>
    </div>
  );
};

export default Home;